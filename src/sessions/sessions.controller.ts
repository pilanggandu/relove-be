import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('sessions')
export class SessionsController {
    constructor(private sessionsService: SessionsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    session(@Req() req) {
        return this.sessionsService.findByUser(req.user.userId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':id/logout')
    logout(@Param('id') id: string, @Req() req) {
        return this.sessionsService.deactivate(id, req.user.userId);
    }
}