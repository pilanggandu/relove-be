import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { SessionsModule } from 'src/sessions/sessions.module';

@Module({
  imports: [
    UsersModule,
    SessionsModule,
    JwtModule.register({
      secret: 'RELOVE_SECRET_KEY',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule { }