const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const cors = require("cors");

app.use(cors());

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

console.log(MONGO_PASSWORD)

const PORT = process.env.PORT || 8080;

const useRouter = require("./controller/userRouter");

app.get("/",(req,res)=>{
    try {
        res.send({message:"This is E-commerce Follow Along Backend"});
    } catch (error) {
        res.status(500).send({error});
    }
})

app.use("/user",useRouter);

app.listen(PORT,async ()=>{
    try {
       await mongoose.connect(`mongodb+srv://abhishektiwari136136:${MONGO_PASSWORD}@cluster0.zsqn5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
       console.log("Connected sucessfully");
    } catch (error) {
        console.log("Something went wrong not able to connect to server",error);
    }
});



