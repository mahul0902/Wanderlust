import { User } from "../models/user.js";

export const renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
}

export const signup = async (req, res, next) => {
    try{
        let {email, username, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

export const renderLoginForm = (req, res) => {
    res.render("users/login.ejs")
}

export const login = async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

export const logout = (req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "you logged out successfully!");
        res.redirect("/listings");
    })
}