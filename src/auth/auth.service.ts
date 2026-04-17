import {
    Injectable,
    BadRequestException,
    UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { SessionsService } from 'src/sessions/sessions.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private sessionsService: SessionsService,
    ) { }

    async register(dto: RegisterDto) {
        const existingUser = await this.usersService.findByEmail(dto.email);

        if (existingUser) {
            throw new BadRequestException('Email sudah terdaftar');
        }

        const hashedPassword = await bcrypt.hash(dto.password, 10);

        const user = await this.usersService.create({
            email: dto.email,
            password: hashedPassword,
        });

        return {
            message: 'User berhasil terdaftar',
            userId: user._id,
        };
    }

    async login(dto: LoginDto) {
        const user = await this.usersService.findByEmail(dto.email);

        if (!user) throw new UnauthorizedException();

        const isMatch = await bcrypt.compare(dto.password, user.password);
        if (!isMatch) throw new UnauthorizedException();

        const accessToken = this.jwtService.sign({
            sub: user._id,
        });

        const refreshToken = this.jwtService.sign({
            sub: user._id,
        });

        await this.sessionsService.create({
            userId: user._id,
            deviceId: dto.deviceId || 'unknown-device',
            refreshToken,
        });

        return {
            accessToken,
            refreshToken,
        };
    }
}