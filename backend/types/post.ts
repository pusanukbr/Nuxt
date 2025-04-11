import mongoose from "mongoose"

export interface IComment {
  post: mongoose.Types.ObjectId
  user: mongoose.Types.ObjectId
  content: string
  createdAt: Date
  views: number
  likes: number
  replies: mongoose.Types.ObjectId[]
}

export interface IPost {
  user: mongoose.Types.ObjectId
  content: string
  likes: number
  views: number
  createdAt: Date
  comments: mongoose.Types.ObjectId[]
}
