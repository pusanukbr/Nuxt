import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../types/user';
import bcrypt from 'bcryptjs';

interface IUserModel extends IUser, Document {}

const userSchema = new Schema<IUserModel>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        avatar: { type: String, required: false },
    },
    { timestamps: true }
);

// Hash password before saving
userSchema.pre<IUserModel>('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model<IUserModel>('User', userSchema);
