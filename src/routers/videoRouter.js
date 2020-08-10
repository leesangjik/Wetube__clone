import express from "express";
import routes from "../routes";
import { videoDetail, getEditVideo, deleteVideo, postUpload, postEditVideo, getUpload } from "../controller/videoController";
import { upLoadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, upLoadVideo, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);


//Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

//Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;