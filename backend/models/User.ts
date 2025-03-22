import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../types/user';

interface IUserModel extends IUser, Document {}

const userSchema = new Schema<IUserModel>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IUserModel>('User', userSchema);
