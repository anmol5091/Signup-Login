var PostsModel = require("../models/PostsModel");
var express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
  res.status(200).json({
    message:"post api get"
  })
})

router.post('/',(req,res)=>{
  res.status(200).json({
    message:"post api post"
  })
})

router.put('/',(req,res)=>{
  res.status(200).json({
    message:"post api put"
  })
})

module.exports = router;
