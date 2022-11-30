const express=require("express");
const app=express();
const mysql=require("mysql");

const connection=mysql.createConnection({
    host:"localhost",
    user:"db_user",
    password:"password",
    database:"mysql://root:EgLAg7ByaBgWyPCoTuWb@containers-us-west-98.railway.app:7325/railway"
})
const init_db_server=()=>{
    connection.connect((err)=>{
        if(err){
            console.log(`the error is ${err}`);
            return;
        }
        console.log("sql is clear")
    });
    app.listen(process.env.PORT || 3000,()=>{console.log("app is started at port 3000")})
    
}
init_db_server();


app.get("/",(request,response)=>{
    connection.query("select * from cricket_team",(error,result)=>{
        if (error){
            response.send(error)
        }
        response.send(result)
    })
    
   // response.send("this is home page");
})

app.get("/about/",(request,response)=>{
    response.send("this is about page");
})


