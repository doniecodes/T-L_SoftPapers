const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = (id)=> {
    return jwt.sign({id}, process.env.SECRET);
}

const handleErrors = (err)=> {
    let errors = { email: "",  password: ""};
    
    if(err.message === "enter email"){
        errors.email = "Please enter an email"
    }
    if(err.message === "enter password"){
        errors.password = "Please enter a password"
    }

    if(err.message === "invalid email"){
        errors.email = "Please enter a valid email"
    }
    if(err.message === "weak password"){
        errors.password = "Please enter a strong password"
    }

    if(err.message === "wrong password"){
        errors.password = "Password is incorrect"
    }
    if(err.message === "email not found"){
        errors.email = "Email not found"
    }

    return errors;
}

const userCreate = async (req, res)=> {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password)
        const token = signToken(user._id);
        res.status(200).json({ email, token })
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(404).json({errors});
    }
}

const userLogin = async(req, res)=> {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        const token = signToken(user._id);
        res.status(200).json({ email, token })
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(404).json({errors});
    }
}


module.exports = {
    userCreate,
    userLogin
}