import jwt from 'jsonwebtoken';
import UserModel from '../models/User';
import { NextFunction, Request, Response } from 'express';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ msg: 'Not authorized to access this route' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || '');
    const user = await UserModel.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(404).json({ msg: 'No user found with this id' });
    }

    req.user = user;
    next();
  } catch (error: any) {
    console.error('Auth error:', error.message);
    res.status(401).json({ msg: 'Not authorized to access this route' });
  }
};
