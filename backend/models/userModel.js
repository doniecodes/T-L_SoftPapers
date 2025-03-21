const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isStrongPassword, isEmail } = require("validator")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.statics.signup = async function(email, password) {
    if(!email){
        throw Error("enter email");
    }
    if(!password){
        throw Error("enter password");
    }

    if(!isEmail(email)){
        throw Error("invalid email");
    }
    if(!isStrongPassword(password)){
        throw Error("weak password");
    }

    const user = await this.create({ email, password });
    if(user){
        return user
    }
}

userSchema.statics.login = async function(email, password) {
    if(!email){
        throw Error("enter email");
    }
    if(!password){
        throw Error("enter password");
    }

    const user = await this.findOne({ email });
    if(user){
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(passwordMatch){
            return user;
        } 
        throw Error("wrong password");
    }
        throw Error("email not found");
}


const User = mongoose.model("users", userSchema);
module.exports = User;