import express from "express";
import "core-js";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

import "./passport";

const app = express();

app.use(helmet());
app.set('view engine', "pug");
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;