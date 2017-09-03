import {Schema} from "mongoose";

export const CourseSchema: Schema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true
    },
    name: String,
    time: {
        start: String,
        end: String,
        repeatFor: [Number]
    },
    enrolledTeachers: [String]
});