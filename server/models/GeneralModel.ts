import { Model } from "mongoose";
import { UserModel, TeacherModel, CourseModel, MemberModel, SeatModel } from "./Models";

export interface GeneralModel{
    user: Model<UserModel>;
    teacher: Model<TeacherModel>;
    course: Model<CourseModel>;
    member: Model<MemberModel>;
    seat: Model<SeatModel>;
}