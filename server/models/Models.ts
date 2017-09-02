import { Document } from "mongoose";
import {
    UserInterface,
    TeacherInterface,
    MemberInterface,
    CourseInterface,
    SeatInterface
} from "../interfaces/Interfaces";

export interface UserModel extends UserInterface, Document {
    //custom methods for your model would be defined here
}

export interface TeacherModel extends TeacherInterface, Document {
    //custom methods for your model would be defined here
}

export interface MemberModel extends MemberInterface, Document {
    //custom methods for your model would be defined here
}

export interface CourseModel extends CourseInterface, Document {
    //custom methods for your model would be defined here
}

export interface SeatModel extends SeatInterface, Document {
    //custom methods for your model would be defined here
}