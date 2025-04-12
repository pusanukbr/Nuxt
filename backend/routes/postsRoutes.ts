import express from 'express'
import { getPosts, getPost, createPost } from '../controllers/postsController'
import { protect } from '../middleware/authMiddleware';

const router = express.Router()

router.post('/createPost', protect, createPost)
router.get('/', getPosts)
router.get('/:id', getPost)

export default router
