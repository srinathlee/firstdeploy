const express=require("express");
const app=express();
const mysql=require("mysql2");
const DATABASE_URL='mysql://root:EgLAg7ByaBgWyPCoTuWb@containers-us-west-98.railway.app:7325/railway'
const connection=mysql.createConnection(DATABASE_URL)
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

    connection.query("select * from cricket_team;",(error,result)=>{
        if (error){
            response.send(error)
        }
        response.send(result)
    })
})


