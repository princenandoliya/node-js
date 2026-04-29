
const fs = require('fs');
fs.writeFileSync("test.txt","hello")


let data = fs.readFileSync("test.txt","utf-8")
console.log("result:-",data)