import {NextFunction, Request, Response, Router} from "express";
import {BaseRoute} from "./route";
import {MemberModel} from "../models/Models";
import {MemberInterface} from "../interfaces/Interfaces";
import * as mongoose from "mongoose";
import {GetFormattedDocResponse} from "../util/Util";

/**
 * / route
 *
 * @class User
 */
export class MemberRoute extends BaseRoute {

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
    public static create(router: Router, model: mongoose.Model<MemberModel>) {
        //log
        console.log("Creating member api route");

        //todo: change method to post and make sure passed info is added
        router.get("/api/member/add", (req: Request, res: Response, next: NextFunction) => {
            new MemberRoute().addOne(req, res, model);
        });

        router.get("/api/member/get", (req: Request, res: Response, next: NextFunction) => {
            new MemberRoute().findAll(res, model);
        });

        router.get("/api/member/get/:id", (req: Request, res: Response, next: NextFunction) => {
            new MemberRoute().findOneById(req, res, model);
        });

        //todo: change method to post and make sure passed info is updated
        router.get("/api/member/update/:id", (req: Request, res: Response, next: NextFunction) => {
            new MemberRoute().findOneAndUpdate(req, res, model);
        });

        router.get("/api/member/remove/:id", (req: Request, res: Response, next: NextFunction) => {
            new MemberRoute().findOneAndRemove(req, res, model);
        });
    }

    //todo: can be common methods
    public addOne(req: Request, res: Response, model: mongoose.Model<MemberModel>) {
        let member: MemberInterface = {
            id: "1",
            name: "谢靖宇",
            phone: [5157084437],
            address: "镇江市瑞泰新城7栋604市",
            coursesPayed: ["1","2"],
            coursesSelected: []
        };
        new model(member)
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

    public findAll(res: Response, model: mongoose.Model<MemberModel>) {
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

    public findOneById(req: Request, res: Response, model: mongoose.Model<MemberModel>) {
        const id = req.params.id;
        model
            .find({id: id})
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

    public findOneAndUpdate(req: Request, res: Response, model: mongoose.Model<MemberModel>) {
        const id = req.params.id;
        model
            .findOneAndUpdate({id: id}, {name: "updated"})
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

    public findOneAndRemove(req: Request, res: Response, model: mongoose.Model<MemberModel>) {
        const id = req.params.id;
        model
            .findOneAndRemove({id: id})
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