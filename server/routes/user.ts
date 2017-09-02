import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import {UserModel} from "../models/Models";
import {UserInterface} from "../interfaces/Interfaces";
import * as mongoose from "mongoose";

/**
 * / route
 *
 * @class User
 */
export class UserRoute extends BaseRoute {
    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
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
        console.log("Creating Api route -> ~/api/user/test.");

        //add home page route
        router.get("/api/user/add", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().addUser(res, userModel);
        });
        router.get("/api/user/get", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findOne(res, userModel);
        });
        router.get("/api/user/remove", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findOneAndRemove(req, res, userModel);
        });
        router.get("/api/user/update", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().findOneAndUpdate(req, res, userModel);
        });
    }

    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @next {NextFunction} Execute the next method.
     */
    public addUser(res: Response, userModel: mongoose.Model<UserModel>) {
        let user:UserInterface = {
            name: "test",
            id:"1",
            phone: [13003451622, 13805282967]
        };
        new userModel(user)
            .save()
            .then(result => {
                res.json('User Added Successfully!')
            })
            .catch(err => {
                res.json('User Added Failed!' + err.errmsg);
                throw err;
            })
    }

    public findAll(res: Response, userModel: mongoose.Model<UserModel>) {
        console.log("All");
        userModel
            .find({})
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json('Find All Failed!'+ err.errmsg);
                throw err;
            })
    }

    public findOne(res: Response, userModel: mongoose.Model<UserModel>) {
        console.log("One");
        userModel
            .find({name:"test"})
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json('Find One result Failed!'+ err.errmsg);
                throw err;
            })
    }

    public findOneAndUpdate(req:Request, res: Response, userModel: mongoose.Model<UserModel>) {
        userModel
            .findOneAndUpdate({name:"test"},{name:"Tewwwwst"})
            .then(result => {
                if (result) {
                    res.json('Update Success!');
                }else{
                    res.json('No such result found!');
                }
            })
            .catch(err => {
                res.json('Update result Failed!'+ err.errmsg);
                throw err;
            });
    }

    public findOneAndRemove(req:Request, res: Response, userModel: mongoose.Model<UserModel>) {
        userModel
            .findOneAndRemove({name:"test"})
            .then(result => {
                if (result) {
                    res.json('Remove Success!');
                }else{
                    res.json('No such result found!');
                }
            })
            .catch(err => {
                res.json('Remove result Failed!'+ err);
                throw err;
            });
    }
}