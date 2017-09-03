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
    public static create(router: Router, userModel: mongoose.Model<UserModel>) {
        //log
        console.log("Creating user api route");

        //todo: change method to post and make sure passed info is added
        router.get("/api/user/add", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().addUser(req, res, userModel);
        });

        router.get("/api/user/get", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findAll(res, userModel);
        });

        router.get("/api/user/get/:id", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findOneById(req, res, userModel);
        });

        //todo: change method to post and make sure passed info is updated
        router.get("/api/user/update/:id", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findOneAndUpdate(req, res, userModel);
        });

        router.get("/api/user/remove/:id", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findOneAndRemove(req, res, userModel);
        });
    }

    public addUser(req: Request, res: Response, userModel: mongoose.Model<UserModel>) {
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
        new userModel(user)
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

    public findAll(res: Response, userModel: mongoose.Model<UserModel>) {
        userModel
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

    public findOneById(req: Request, res: Response, userModel: mongoose.Model<UserModel>) {
        const id = req.params.id;
        userModel
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

    public findOneAndUpdate(req: Request, res: Response, userModel: mongoose.Model<UserModel>) {
        const id = req.params.id;
        userModel
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

    public findOneAndRemove(req: Request, res: Response, userModel: mongoose.Model<UserModel>) {
        const id = req.params.id;
        userModel
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