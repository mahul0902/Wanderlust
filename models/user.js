import mongoose from "mongoose";
const Schema = mongoose.Schema;
import passportLocalMongoose from "passport-local-mongoose";

//Passport local mongoose will automatically set username and password fields in schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose.default);
export const User = mongoose.model("User", userSchema);