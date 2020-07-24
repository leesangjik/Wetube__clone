import express from "express";
import routes from "../routes";
import { userDetail, editProfile, changePassword, streaming } from "../controller/userController";

const userRouter = express.Router();


userRouter.get(routes.streaming, streaming)
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;