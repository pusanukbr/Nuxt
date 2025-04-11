import mongoose, { Document, Schema } from 'mongoose'
import { IPost } from '../types/post'

interface IPostModel extends IPost, Document {}

const postSchema = new Schema<IPostModel>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
)

// Export the model
export default mongoose.model<IPostModel>('Post', postSchema)
