

import express from "express"

const all = express();


all.get("/",(req,res)=>{
    res.json("hello from express server")
})

const port = 5000;

all.listen(port,(err)=>{
    if(err){
        return console.log(err)
    }else{
        console.log("server runing on port",port)
    }
})