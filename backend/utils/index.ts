import jwt from 'jsonwebtoken';

//Generete JWT token
export const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || '', {
        expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    });
}