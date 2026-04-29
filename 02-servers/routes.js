


import http from "http";


const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("this is a home page")
    } else if (req.url === "/about") {
        res.end("this is a about page")
    } else {
        res.end("this page not found")
    }

})

const port = 5000;

server.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`server runing port ${port}`);
})