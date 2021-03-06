import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controller/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`
}, githubLoginCallback)
);

passport.serializeUser(User.serializeUser(function (user, done) {
    done(null, user);
}));
passport.deserializeUser(User.deserializeUser(function (user, done) {
    done(null, user);
}));