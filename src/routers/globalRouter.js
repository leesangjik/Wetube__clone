import express from "express";
import routes from "../routes";
import { home, search, popularVideo, subscribe } from "../controller/videoController";
import { getJoin, getLogin, logout, postJoin, postLogin, githubLogin, postGithubLogin, principal } from "../controller/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.popular, popularVideo);

globalRouter.get(routes.subscribe, subscribe);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.github, githubLogin);

globalRouter.get(routes.githubCallback, passport.authenticate('github', { failureRedirect: '/login' }), postGithubLogin);

globalRouter.get(routes.principal, principal);

export default globalRouter;