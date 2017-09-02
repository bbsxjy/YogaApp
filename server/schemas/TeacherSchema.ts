import {Schema} from "mongoose";

export const TeacherSchema: Schema = new Schema({
    id: {
        type:String,
        index: true,
        unique: true
    },
    name: String,
    coursesEnrolled: [String]
});