const express = require("express");
const userModel = require("../models/userModel");
const { userImage } = require("../middleware/multer");

const userRouter = express.Router();

userRouter.post("/signup",userImage.single("image"),async(req,res)=>{
    try {
        const{name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).send({message:"All details are required"});
        }
        const user =await userModel.findOne({email});
        if(user){
            return res.status(200).send({message:"User Already Registered"});
        }
        await userModel.insertOne({name,email,password});
        return res.status(200).send({message:"user registered sucessfully"});
    } catch (error) {
        return res.status(500).send({error});
    }
})

userRouter.post("/login",async(req,res)=>{
    try {
        const{email,password} = req.body;
        if(!email || !password){
            return  res.status(400).send({message:"All details are required"});
        }
        const user =await userModel.findOne({email,password});
        if(user){
            return  res.status(200).send({message:"User logged in sucessfully"});
        }
    } catch (error) {
        return res.status(500).send({error});
    }
})


module.exports = userRouter;