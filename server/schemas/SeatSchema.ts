import {Schema} from "mongoose";

export const SeatSchema: Schema = new Schema({
    id: {
        type:String,
        index: true,
        unique: true
    },
    seats: Schema.Types.Mixed
});