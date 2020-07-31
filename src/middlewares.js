import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY
})

const multerVideo = multer({
    storage: multerS3({
        s3,
        acl: 'public-read',
        bucket: 'sjtube/video'
    })
})

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Leetube";
    res.locals.routes = routes;
    res.locals.user = req.user || {};
    next();
};

export const upLoadVideo = multerVideo.single('videoFile');