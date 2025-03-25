export interface IUser {
    username: string;
    email: string;
    password: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;
}