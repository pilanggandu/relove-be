import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Session } from './schemas/session.schema';
import { Model } from 'mongoose';

@Injectable()
export class SessionsService {
    constructor(
        @InjectModel(Session.name)
        private sessionModel: Model<Session>,
    ) { }

    async create(data: any) {
        return this.sessionModel.create(data);
    }

    async findByUser(userId: string) {
        return this.sessionModel.find({ userId, isActive: true });
    }

    async deactivate(sessionId: string, userId: string) {
        return this.sessionModel.updateOne(
            { _id: sessionId, userId },
            { isActive: false },
        );
    }
}