import http from "http"
import fs from "fs"

const server = http.createServer((req,res)=>{
    fs.readFile("fs.html",(err,data)=>{
        if(err){            
            res.write("page not found");
            res.end();
        }else{
            res.writeHead(200,{"content-type": "text/html"})
            res.end(data)
        }
    })
})
    
const port = 5000

server.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server runing on port",port)
    }
})