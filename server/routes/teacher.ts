import {NextFunction, Request, Response, Router} from "express";
import {BaseRoute} from "./route";
import {TeacherModel} from "../models/Models";
import {TeacherInterface} from "../interfaces/Interfaces";
import * as mongoose from "mongoose";
import {GetFormattedDocResponse} from "../util/Util";

/**
 * / route
 *
 * @class User
 */
export class TeacherRoute extends BaseRoute {

    constructor() {
        super();
    }

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static create(router: Router, model: mongoose.Model<TeacherModel>) {
        //log
        console.log("Creating teacher api route");

        //todo: change method to post and make sure passed info is added
        router.get("/api/teacher/add", (req: Request, res: Response, next: NextFunction) => {
            new TeacherRoute().addOne(req, res, model);
        });

        router.get("/api/teacher/get", (req: Request, res: Response, next: NextFunction) => {
            new TeacherRoute().findAll(res, model);
        });

        router.get("/api/teacher/get/:id", (req: Request, res: Response, next: NextFunction) => {
            new TeacherRoute().findOneById(req, res, model);
        });

        //todo: change method to post and make sure passed info is updated
        router.get("/api/teacher/update/:id", (req: Request, res: Response, next: NextFunction) => {
            new TeacherRoute().findOneAndUpdate(req, res, model);
        });

        router.get("/api/teacher/remove/:id", (req: Request, res: Response, next: NextFunction) => {
            new TeacherRoute().findOneAndRemove(req, res, model);
        });
    }

    //todo: can be common methods
    public addOne(req: Request, res: Response, model: mongoose.Model<TeacherModel>) {
        let teacher: TeacherInterface = {
            name: "孙婷婷",
            id: "1",
            coursesEnrolled: ["1","2"]
        };
        new model(teacher)
            .save()
            .then(doc => {
                res.json(
                    GetFormattedDocResponse(true, "", [doc])
                );
            })
            .catch(err => {
                res.json(
                    GetFormattedDocResponse(false, err, [])
                );
                throw err;
            })
    }

    public findAll(res: Response, model: mongoose.Model<TeacherModel>) {
        model
            .find({})
            .then(doc => {
                res.json(
                    GetFormattedDocResponse(true, "", doc)
                );
            })
            .catch(err => {
                res.json(
                    GetFormattedDocResponse(false, err, [])
                );
                throw err;
            })
    }

    public findOneById(req: Request, res: Response, model: mongoose.Model<TeacherModel>) {
        const id = req.params.id;
        model
            .find({id:id})
            .then(doc => {
                if (doc.length != 0) {
                    res.json(
                        GetFormattedDocResponse(true, "", doc)
                    );
                } else {
                    res.json(
                        GetFormattedDocResponse(false, "No results found", [])
                    );
                }
            })
            .catch(err => {
                res.json(
                    GetFormattedDocResponse(false, err, [])
                );
                throw err;
            })
    }

    public findOneAndUpdate(req: Request, res: Response, model: mongoose.Model<TeacherModel>) {
        const id = req.params.id;
        model
            .findOneAndUpdate({id:id}, {name: "updated"})
            .then(doc => {
                if (doc) {
                    res.json(
                        GetFormattedDocResponse(true, "", [])
                    );
                } else {
                    res.json(
                        GetFormattedDocResponse(false, "No such doc exits", [])
                    );
                }
            })
            .catch(err => {
                res.json(
                    GetFormattedDocResponse(false, err, [])
                );
                throw err;
            })
    }

    public findOneAndRemove(req: Request, res: Response, model: mongoose.Model<TeacherModel>) {
        const id = req.params.id;
        model
            .findOneAndRemove({id:id})
            .then(doc => {
                if (doc) {
                    res.json(
                        GetFormattedDocResponse(true, "", [doc])
                    );
                } else {
                    res.json(
                        GetFormattedDocResponse(false, "No such doc exits", [])
                    );
                }
            })
            .catch(err => {
                res.json(
                    GetFormattedDocResponse(false, err, [])
                );
                throw err;
            })
    }
}