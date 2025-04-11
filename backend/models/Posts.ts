import mongoose, { Document, Schema } from 'mongoose'
import { IPost } from '../types/posts'

interface IPostModel extends IPost, Document {}

const postsSchema = new Schema<IPostModel>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        views: { type: Number, default: 0 },
        replies: [
          {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            content: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            views: { type: Number, default: 0 },
            likes: { type: Number, default: 0 }
          }
        ]
      }
    ]
  },
  { timestamps: true }
)

// Export the model
export default mongoose.model<IPostModel>('Posts', postsSchema)
