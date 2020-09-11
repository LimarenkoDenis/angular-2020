import { Gender } from './Gender';

export interface IUserData {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    birthDate: Date;
    gender: Gender;
}