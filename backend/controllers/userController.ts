import { Request, Response } from 'express';
import User from '../models/User';
import { generateToken } from '../utils';
import userDtos from '../dtos/userDtos';
import jwt from 'jsonwebtoken';

// Register User
export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    
    // Validate user
    if(!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            username,
            email,
            password
        });

        await user.save();

        const token = generateToken(user._id);  

        const userData = userDtos(user);
        res.cookie('token', token, {
            httpOnly: true,     // 🔒 Захищено: JS не бачить
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict', // 🚫 Захист від CSRF
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 днів
            path: '/',
          })

        res.status(200).json(userData);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Login User
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Validate user
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({msg: 'User does not exist'});
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({msg: 'Invalid credentials'});
        }

        const token = generateToken(user._id);

        const userData = userDtos(user);
        res.cookie('token', token, {
            httpOnly: true,     // 🔒 Захищено: JS не бачить
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict', // 🚫 Захист від CSRF
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 днів
            path: '/',
          })

        res.status(200).json(userData);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Get User Info
export const getUser = async (req: Request, res: Response) => { 
    try {

      const user = await User.findById(req.user.id).select('-password');
  
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

      const userData = userDtos(user);
  
      res.status(200).json(userData);
    } catch (error) {
      console.error(error);
      res.status(401).json({ msg: 'Invalid token' });
    }
  };