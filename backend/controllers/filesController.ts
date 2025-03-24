import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import User from "../models/User";
import { IUser } from '../types/user';

interface REQUser extends IUser, Request {}

// Function to delete a file
const deleteFile = (filePath: string) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Failed to delete file: ${filePath}`, err);
        } else {
            console.log(`File deleted: ${filePath}`);
        }
    });
};

export const fileController = async (req: REQUser, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ msg: 'Please select a file' });
    }
    // Assuming the user's current avatar path is stored in req.user.avatar
    const currentAvatarPath = req.user.avatar;

    // Delete the old avatar if it exists
    if (currentAvatarPath) {
        const fullPath = path.join(__dirname, '..', 'uploads', currentAvatarPath);
        deleteFile(fullPath);
    }

    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    // Save the new avatar path to the user (this part depends on your user model and database setup)
    await User.updateOne({ email: req.user.email }, { avatar: imageUrl });

    res.status(201).json({ imageUrl });
}