import { Document } from "mongoose";
import { UserInterface } from "../interfaces/IUser";

export interface UserModel extends UserInterface, Document {
    //custom methods for your model would be defined here
}