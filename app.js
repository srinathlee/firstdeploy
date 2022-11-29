const express=require("express");
const app=express();

app.get("/",(request,response)=>{
    response.send("this is home page");
})

app.get("/about/",(request,response)=>{
    response.send("this is about page");
})


app.listen(5820,()=>{console.log("app is started at port 3000")})