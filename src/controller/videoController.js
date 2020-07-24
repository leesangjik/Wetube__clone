import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 });
        res.render("home", { pageTitle: "Home", videos });
    } catch (err) {
        console.log(`error:${err}`)
        res.render("home", { pageTitle: "Home", videos: [] })
    }
};

export const search = async (req, res) => {
    const { query: { term: searchingBy } } = req;
    let videos = [];
    try {
        videos = await Video.find({ title: { $regex: searchingBy, $options: "i" } })
    } catch (err) {
        console.log(`Error:${err}`);
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos });
}


export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" })
};

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { location }
    } = req;
    const newVideo = await Video.create({
        fileUrl: location,
        title,
        description
    })
    res.redirect(routes.videoDetail(newVideo.id))
};



export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle: video.title, video })
    } catch (err) {
        console.log(`error:${err}`);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit:${video.title}`, video });
    } catch (err) {
        console.log(`Error: ${err}`);
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findByIdAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (err) {
        console.log(`Error:${err}`);
        res.redirect(routes.home);
    }
    res.render("editVideo", { pageTitle: "Edit Video" })
}

export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Video.findByIdAndRemove({ _id: id });
    } catch (err) {
        console.log(`Error:${err}`);
    } finally {
        res.redirect(routes.home);
    }
    res.render("deleteVideo", { pageTitle: "Delete Video" });
};

export const popularVideo = (req, res) => {
    res.render("popular")
}

export const subscribe = (req, res) => {
    res.render("subscribe")
}