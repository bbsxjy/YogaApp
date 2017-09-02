import {Schema} from "mongoose";

export const UserSchema: Schema = new Schema({
    id: {
        type:String,
        index: true,
        unique: true
    },
    email: String,
    name: String,
    username: String,
    password: String,
    phone: [Number],
    createdAt: Date,
    lastActivityAt: Date,
    auth: String,
    role: String
});

UserSchema.pre("save", function (next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});