import express from "express";
import routes from "../routes";
import { userDetail, editProfile, changePassword, streaming } from "../controller/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();


userRouter.get(routes.streaming, onlyPrivate, streaming)
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;