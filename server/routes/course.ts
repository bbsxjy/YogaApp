import {NextFunction, Request, Response, Router} from "express";
import {BaseRoute} from "./route";
import {CourseModel} from "../models/Models";
import {CourseInterface} from "../interfaces/Interfaces";
import * as mongoose from "mongoose";
import {GetFormattedDocResponse} from "../util/Util";

/**
 * / route
 *
 * @class User
 */
export class CourseRoute extends BaseRoute {

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
    public static create(router: Router, model: mongoose.Model<CourseModel>) {
        //log
        console.log("Creating course api route");

        //todo: change method to post and make sure passed info is added
        router.get("/api/course/add", (req: Request, res: Response, next: NextFunction) => {
            new CourseRoute().addOne(req, res, model);
        });

        router.get("/api/course/get", (req: Request, res: Response, next: NextFunction) => {
            new CourseRoute().findAll(res, model);
        });

        router.get("/api/course/get/:id", (req: Request, res: Response, next: NextFunction) => {
            new CourseRoute().findOneById(req, res, model);
        });

        //todo: change method to post and make sure passed info is updated
        router.get("/api/course/update/:id", (req: Request, res: Response, next: NextFunction) => {
            new CourseRoute().findOneAndUpdate(req, res, model);
        });

        router.get("/api/course/remove/:id", (req: Request, res: Response, next: NextFunction) => {
            new CourseRoute().findOneAndRemove(req, res, model);
        });
    }

    //todo: can be common methods
    public addOne(req: Request, res: Response, model: mongoose.Model<CourseModel>) {
        let course: CourseInterface = {
            id: "1",
            name: "热力瑜伽",
            time: {
                start: "09:30:00",
                end: "11:30:00",
                repeatFor: [2,4,5]
            },
            enrolledTeachers: ["1","2"]
        };
        new model(course)
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

    public findAll(res: Response, model: mongoose.Model<CourseModel>) {
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

    public findOneById(req: Request, res: Response, model: mongoose.Model<CourseModel>) {
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

    public findOneAndUpdate(req: Request, res: Response, model: mongoose.Model<CourseModel>) {
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

    public findOneAndRemove(req: Request, res: Response, model: mongoose.Model<CourseModel>) {
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