import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import {IndexRoute} from "./routes/index";
//models
import {GeneralModel} from "./models/GeneralModel"; //import IModel
import {CourseModel, MemberModel, SeatModel, TeacherModel, UserModel} from "./models/Models"; //import IUserModel
//schemas
import {UserSchema} from "./schemas/UserSchema"; //import UserSchema
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import mongoose = require("mongoose"); //import mongoose
import {ErrorRoute} from "./routes/error";
import {MemberSchema} from "./schemas/MemberSchema";
import {TeacherSchema} from "./schemas/TeacherSchema";
import {CourseSchema} from "./schemas/CourseSchema";
import {SeatSchema} from "./schemas/SeatSchema";
import {UserRoute} from "./routes/user";
import {TeacherRoute} from "./routes/teacher";
import {MemberRoute} from "./routes/member";
import {CourseRoute} from "./routes/course";
import {SeatsRoute} from "./routes/seats";

export class Server {
    public app: express.Application;

    private model: GeneralModel;

    private router: express.Router;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        //instance defaults
        this.model = Object();  //initialize this to an empty object

        //create expressjs application
        this.app = express();

        //configure application
        this.config();

        //add routes
        this.routes();
    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
        const MONGODB_CONNECTION: string = "mongodb://localhost:27017/yoga";

        //add static paths
        this.app.use(express.static(path.join(__dirname, "public")));

        //configure pug
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");

        //use logger middlware
        this.app.use(logger("dev"));

        //use json form parser middleware
        this.app.use(bodyParser.json());

        //use query string parser middleware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        //use cookie parser middleware
        this.app.use(cookieParser("SECRET_GOES_HERE"));

        //mount override
        this.app.use(methodOverride());

        //use q promises
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;

        //connect to mongoose
        let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
        console.log("MongoDB connected" + connection);

        //connect to models
        this.model.user = connection.model<UserModel>("User", UserSchema);
        this.model.member = connection.model<MemberModel>("Member", MemberSchema);
        this.model.teacher = connection.model<TeacherModel>("Teacher", TeacherSchema);
        this.model.course = connection.model<CourseModel>("Course", CourseSchema);
        this.model.seat = connection.model<SeatModel>("Seat", SeatSchema);

        //catch 404 and forward to error handler
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        //error handling
        this.app.use(errorHandler());
    }

    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    public routes() {
        this.router = express.Router();
        //IndexRoute
        IndexRoute.create(this.router);
        //use router middleware
        UserRoute.create(this.router, this.model.user);
        TeacherRoute.create(this.router, this.model.teacher);
        MemberRoute.create(this.router, this.model.member);
        CourseRoute.create(this.router, this.model.course);
        SeatsRoute.create(this.router, this.model.seat);
        //ErrorRoute
        ErrorRoute.create(this.router);

        this.app.use(this.router);
    }
}