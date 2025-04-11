import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'

import authRoutes from './routes/authRoutes'
import postsRoutes from './routes/postsRoutes'

import cors from 'cors'

dotenv.config()

const app = express()
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)
app.use(express.json())

connectDB()

app.get('/', (_, res) => {
  res.send('API is running...')
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/posts', postsRoutes)

// Server upload folder
app.use('/uploads', express.static('uploads'))

export default app
