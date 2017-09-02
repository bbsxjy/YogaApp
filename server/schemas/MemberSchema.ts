import {Schema} from "mongoose";

export const MemberSchema: Schema = new Schema({
    id: {
        type:String,
        index: true,
        unique: true
    },
    name: String,
    phone: [Number],
    address: String,
    coursesPayed: [String],
    coursesSelected: [String]
});