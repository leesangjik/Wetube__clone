// Global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const POPULAR = "/popular"
const SUBSCRIBE = "/subscribe"

// USERS

const USERS = "/users";
const USER_DETAIL = "/:id";
const USER_STREAMING = "/streaming-now"
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const PRINCIPAL = '/principal';


//GITHUB

const GITHUB = '/auth/github';
const GITHUB_CALLBACK = '/auth/github/callback';

// VIDEO

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDTI_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    popular: POPULAR,
    subscribe: SUBSCRIBE,
    search: SEARCH,
    users: USERS,
    principal: PRINCIPAL,
    streaming: USER_STREAMING,
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }

    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: (id) => {
        if (id) {
            return `/videos/${id}/edit`;
        } else {
            return EDTI_VIDEO;
        }
    },
    deleteVideo: (id) => {
        if (id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    },
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK
};

export default routes;