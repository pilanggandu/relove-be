import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Session {
    @Prop({ required: true })
    userId!: string;

    @Prop({ required: true })
    deviceId?: string;

    @Prop({ required: true })
    refreshToken!: string;

    @Prop({ default: true })
    isActive!: boolean;
}

export const SessionSchema = SchemaFactory.createForClass(Session);