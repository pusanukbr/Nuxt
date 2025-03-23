import { Request, Response } from 'express';
import User from '../models/User';

import jwt from 'jsonwebtoken';

//Generete JWT token
const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || '', {
        expiresIn: '1h',
    });
}

// Register User
export const registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    // Validate user
    if(!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            name,
            email,
            password
        });

        await user.save();

        const token = generateToken(user._id);

        res.status(201).json({ id: user._id, user, token });
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Login User
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    console.log(email, password);
    // Validate user
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({msg: 'User does not exist'});
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({msg: 'Invalid credentials'});
        }

        const token = generateToken(user._id);

        res.status(200).json({id: user._id, user, token});
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Get User Info
export const getUserInfo = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({msg: 'User not found'});
        }

        res.status(200).json(user);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}