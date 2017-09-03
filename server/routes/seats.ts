import {NextFunction, Request, Response, Router} from "express";
import {BaseRoute} from "./route";
import {SeatModel} from "../models/Models";
import {SeatInterface} from "../interfaces/Interfaces";
import * as mongoose from "mongoose";
import {GetFormattedDocResponse} from "../util/Util";

/**
 * / route
 *
 * @class User
 */
export class SeatsRoute extends BaseRoute {

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
    public static create(router: Router, model: mongoose.Model<SeatModel>) {
        //log
        console.log("Creating seat api route");

        //todo: change method to post and make sure passed info is added
        router.get("/api/seat/add", (req: Request, res: Response, next: NextFunction) => {
            new SeatsRoute().addOne(req, res, model);
        });

        router.get("/api/seat/get", (req: Request, res: Response, next: NextFunction) => {
            new SeatsRoute().findAll(res, model);
        });

        router.get("/api/seat/get/:id", (req: Request, res: Response, next: NextFunction) => {
            new SeatsRoute().findOneById(req, res, model);
        });

        //todo: change method to post and make sure passed info is updated
        router.get("/api/seat/update/:id", (req: Request, res: Response, next: NextFunction) => {
            new SeatsRoute().findOneAndUpdate(req, res, model);
        });

        router.get("/api/seat/remove/:id", (req: Request, res: Response, next: NextFunction) => {
            new SeatsRoute().findOneAndRemove(req, res, model);
        });
    }

    //todo: can be common methods
    public addOne(req: Request, res: Response, model: mongoose.Model<SeatModel>) {
        let user: SeatInterface = {
            id: "1",
            seats: [{
                seatNumber:1,
                isTaken:false
            },{
                seatNumber:2,
                isTaken:false
            },{
                seatNumber:3,
                isTaken:true
            }]
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

    public findAll(res: Response, model: mongoose.Model<SeatModel>) {
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

    public findOneById(req: Request, res: Response, model: mongoose.Model<SeatModel>) {
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

    public findOneAndUpdate(req: Request, res: Response, model: mongoose.Model<SeatModel>) {
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

    public findOneAndRemove(req: Request, res: Response, model: mongoose.Model<SeatModel>) {
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