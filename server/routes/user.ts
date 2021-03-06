import {NextFunction, Request, Response, Router} from "express";
import {BaseRoute} from "./route";
import {UserModel} from "../models/Models";
import {UserInterface} from "../interfaces/Interfaces";
import * as mongoose from "mongoose";
import {GetFormattedDocResponse} from "../util/Util";

/**
 * / route
 *
 * @class User
 */
export class UserRoute extends BaseRoute {

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
    public static create(router: Router, model: mongoose.Model<UserModel>) {
        //log
        console.log("Creating user api route");

        //todo: change method to post and make sure passed info is added
        router.get("/api/user/add", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().addOne(req, res, model);
        });

        router.get("/api/user/get", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findAll(res, model);
        });

        router.get("/api/user/get/:id", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findOneById(req, res, model);
        });

        //todo: change method to post and make sure passed info is updated
        router.get("/api/user/update/:id", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findOneAndUpdate(req, res, model);
        });

        router.get("/api/user/remove/:id", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findOneAndRemove(req, res, model);
        });
    }

    //todo: can be common methods
    public addOne(req: Request, res: Response, model: mongoose.Model<UserModel>) {
        let user: UserInterface = {
            name: "会员1",
            id: "999",
            phone: [13000000000],
            email: "bbsxjy@gmail.com",
            username: "test",
            password: "test",
            auth: 0,
            role: "member"
        };
        new model(user)
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

    public findAll(res: Response, model: mongoose.Model<UserModel>) {
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

    public findOneById(req: Request, res: Response, model: mongoose.Model<UserModel>) {
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

    public findOneAndUpdate(req: Request, res: Response, model: mongoose.Model<UserModel>) {
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

    public findOneAndRemove(req: Request, res: Response, model: mongoose.Model<UserModel>) {
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