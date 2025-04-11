import { Request, Response } from 'express'
import Post from '../models/Post'

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate('user', 'username avatar')
    res.status(200).json(posts)
  } catch (error: any) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

export const getPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id).populate('user', 'username avatar')
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' })
    }
    res.status(200).json(post)
  } catch (error: any) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body

  try {
    const post = new Post({
      title,
      content,
      user: req.user.id
    })

    await post.save()
    res.status(201).json(post)
  } catch (error: any) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}
