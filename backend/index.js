const express = require("express")

const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const connect = require("./mongoDB");
const userRouter = require("./controller/userRouter");

const productRouter = require("./controller/productRouter");
 
app.get("/",(req,res)=>{
    try {
        res.status(200).send({mgs:"This is e-commerce code along backend"});
    } catch (error) {
        res.status(500).send({message:"error occured"});
    }
})

//localhost:8000/user/login

app.use("/user",userRouter);

app.use("/product",productRouter);


app.listen(8000,async()=>{
    try {
        await connect();
        console.log("Server connected successfully");
    } catch (error) {
        console.log("Error",error)
    }
})