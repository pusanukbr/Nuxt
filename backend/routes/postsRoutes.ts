import express from 'express'
import { getPosts, getPost, createPost } from '../controllers/postsController'

const router = express.Router()

router.post('/post', createPost)
router.get('/', getPosts)
router.get('/:id', getPost)

export default router
