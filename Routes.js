const express = require("express");
var UsersController = require("../controller/UsersController");
var PostsController = require("../controller/PostsController");
const Routes = express.Router();

Routes.use("/users", UsersController);
Routes.use("/posts", PostsController);


Routes.use((req,res)=>{
    res.status(400).json({
        message:"Not Found"
    })
})

Routes.use((req,res)=>{
    res.status(res.status || 500);
})

module.exports = Routes;
