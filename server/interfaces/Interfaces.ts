import {UserModel, TeacherModel, SeatModel, CourseModel, MemberModel} from "../models/Models";

export interface UserInterface {
    id?: string;
    email?: string;
    name?: string;
    username?: string;
    password?: string;
    phone?: number[];
    createdAt?: Date;
    lastActivityAt?: Date;
    auth?: number;
    role?: string;
}

export interface TeacherInterface {
    id?: string;
    name?: string;
    coursesEnrolled?: string[];
}

export interface MemberInterface {
    id?: string;
    name?: string;
    phone?: number[];
    address?: string;
    coursesPayed?: string[];
    coursesSelected?: string[];
}

export interface CourseInterface {
    id?: string;
    name?: string;
    time: TimeBlock;
}

export interface SeatInterface {
    id?: string;
    seats?: SeatsBlock;
}

export interface TimeBlock {
    start?: string;
    end?: string;
    repeatFor?: number[];
}

export interface SeatsBlock {
    isTaken: { number: boolean };
}

export interface ResponseInterface {
    success: boolean;
    error: string;
    documents?: UserModel[] | TeacherModel[] | MemberModel[] | CourseModel[] | SeatModel[];
    count?: number;
}