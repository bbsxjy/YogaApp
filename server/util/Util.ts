import {ResponseInterface} from "../interfaces/Interfaces";
import {CourseModel, MemberModel, SeatModel, TeacherModel, UserModel} from "../models/Models";

export function GetFormattedDocResponse (
    success: boolean,
    error: string,
    documents: UserModel[] | TeacherModel[] | MemberModel[] | CourseModel[] | SeatModel[]
) :ResponseInterface{

    return {
        success: success,
        error: error,
        documents: documents
    };

}

export function GetFormattedCountResponse (
    success: boolean,
    error: string,
    count: number
) :ResponseInterface{

    return {
        success: success,
        error: error,
        count: count
    };

}