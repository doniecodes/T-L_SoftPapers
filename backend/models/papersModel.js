const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const papersSchema = new Schema({
    title: {
        type: String,
        required: [true, "This field is required"],
    },
    price: {
        type: Number,
        required: [true, "This field is required"]
    },
    description: {
        type: String,
        required: [true, "This field is required"]
    },
    packages: {
        type: Array,
        required: false,
        default: [ 12, 24, 48 ]
    },
    image: {
        type: String,
        required: true,
    },
    images: {
        type: String,
        required: false,
        maxlength: 3
    }
}, { timestamps: true })

const Paper = mongoose.model("papers", papersSchema);
module.exports = Paper;