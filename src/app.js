const express = require("express")

const app = express();

app.use("/hello",(req,res)=>{
    res.send("Hello hello hello for the server test!");
})

app.use("/test",(req,res)=>{
    res.send("Hello for the server test!");
})

app.use("/",(req,res)=>{
    res.send("Hello for the server!");
})

app.listen(3000,()=>{
    console.log("this is my server......");
})