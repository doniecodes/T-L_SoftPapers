const Paper = require("../models/papersModel");

// Papers Get Controller
const papersGet = async (req, res)=> {
    try {
        const papers = await Paper.find().sort({ createdAt: -1 });
        res.status(200).json({papers});
    }
    catch(err) {
        res.status(400).json({error: err})
    }
}

// Single paper Get
const singlePaperGet = async (req, res)=> {
    const {id} = req.params;
    try {
        const paper = await Paper.findById(id);
        res.status(200).json({paper});
    }
    catch(err) {
        res.status(400).json({error: err})
    }
}

// Single paper Get
const papersCreate = async (req, res)=> {
    const { title, price, description, packages, image, images } = req.body;
    try {
        const paper = await Paper.create({
            title, price, description, packages,
            image, images
        });
        res.status(200).json({message: "Document Created", paper});
    }
    catch(err) {
        res.status(400).json({error: err})
    }
}




module.exports = {
    papersGet,
    singlePaperGet,
    papersCreate
}