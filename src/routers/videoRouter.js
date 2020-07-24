import express from "express";
import routes from "../routes";
import { videoDetail, getEditVideo, deleteVideo, postUpload, postEditVideo, getUpload } from "../controller/videoController";
import { upLoadVideo } from "../middlewares";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, upLoadVideo, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);


//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;