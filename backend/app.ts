import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
    res.send('API is running...');
});

app.use('/api/users', userRoutes);

export default app;
