const express=require("express");
const cors=require("cors")
const app=express();
const userController=require("./controllers/user.controllers")

app.use(express.json());
app.use(cors())
app.use("/users", userController);


module.exports=app;