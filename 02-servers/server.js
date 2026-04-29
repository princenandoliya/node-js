

// import http from "http";

// const server = http.createServer((req,res)=>{
//     res.write("hello this is my 1st server")    
//     res.end();
// })

//  const port = 5000;

//  server.listen(port,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("server runig on port",port)
//     }
//  })


import http from "http"

const server = http.createServer((req,res)=>{
    res.write("this is my 2nd node server")
    res.end();
})

const port = 5001;

server.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("serve run on port",port)
    }
})