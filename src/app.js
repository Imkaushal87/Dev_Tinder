const express = require("express")

const app = express();

// app.use("/",(req,res)=>{
//     res.send("Hello Kuvar kaushal!");
// });
// app.use("/user",(req,res)=>{
//     res.send("HAHAHAAHAHAAH");
// });
app.get("/user",(req,res)=>{
    res.send({firstName:"kuvar",lastName:"patel",email:"xyz@gmail.com"});
});

app.post("/user",(req,res)=>{
    res.send("Data are saved");
});
app.delete("/user",(req,res)=>{
    res.send("deleted the data");
});
// app.use("/hello",(req,res)=>{
//     res.send("Hello hello hello !");
// });

// app.use("/test",(req,res)=>{
//     res.send("Hello for the server test!");
// });

app.listen(3000,()=>{
    console.log("this is my server......");
});