import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        req.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // To Do: Register user
        // To Do: Log User in
        res.redirect(routes.home)
    }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Log in" });
export const postLogin = (req, res) => {
    res.redirect(routes.home)
}

export const logout = (req, res) => {
    // To Do: Process Log out
    res.redirect(routes.home);
};


export const user = (req, res) => res.render("users", { pageTitle: "Users" });

export const streaming = (req, res) => res.render("streaming")
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });