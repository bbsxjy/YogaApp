import { Model } from "mongoose";
import { UserModel } from "./MUser";

export interface GeneralModel{
    user: Model<UserModel>;
}