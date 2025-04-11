export interface IUser {
  username: string
  avatar?: string
}

export interface IComment {
  user: IUser
  content: string
  createdAt: Date
  views: number
  replies: Comment[]
  likes: number
}

export interface IPost {
  user: IUser
  content: string
  likes: number
  views: number
  createdAt: Date
  comments: IComment[]
}
