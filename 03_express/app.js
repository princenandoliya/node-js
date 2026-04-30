 import express from "express"

 const app = express()


 app.get("/",(req,res)=>{
    res.json("this is a home page")
 })

 app.get("/about",(req,res)=>{
    res.json("this is  about page")
 })

 const port = 5001

 app.listen(port,(err)=>{
    if(err){
        return console.log(err)
    }else{
        console.log("server runing on port",port)
    }
 })