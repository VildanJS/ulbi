import { IUser } from '@/entities/User'


interface IComment {
  id: string,
  user?: IUser | null,
  text: string
}

export {
  IComment
}
