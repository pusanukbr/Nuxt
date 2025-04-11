import mongoose, { Document, Schema } from 'mongoose'
import { IComment } from '../types/post'

interface ICommentModel extends IComment, Document {}

const commentSchema = new Schema<ICommentModel>(
  {
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
)

// Export the model
export default mongoose.model<ICommentModel>('Comment', commentSchema)
