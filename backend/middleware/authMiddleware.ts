import jwt from 'jsonwebtoken';
import UserModel from '../models/User';
import {NextFunction} from "express";

// Middleware to protect routes

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    console.log('req.headers.authorization', req.headers.authorization);
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    // Check if token exists
    if (!token) {
        console.log('No token');
        return res.status(401).json({msg: 'Not authorized to access this route'});
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET || '');
        const user = await UserModel.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(404).json({msg: 'No user found with this id'});
        }

        req.user = user;
        next();
    } catch (error: any) {
        console.error(error.message);
        res.status(401).json({msg: 'Not authorized to access this route'});
    }
}