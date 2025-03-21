require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const papersRoutes = require("../backend/routes/papersRoutes")
const userRoutes = require("../backend/routes/userRoutes")

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: [ "GET", "POST", "PUT", "PATCH", "DELETE" ]
}))
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then((result)=> {
    app.listen(4000, ()=> {
        console.log("Listening on PORT 4000")
    })
}).catch((err)=> {
    console.log(err)
})

// papers Routes
app.use("/api/papers", papersRoutes)

// User Routes
app.use("/api/user", userRoutes);