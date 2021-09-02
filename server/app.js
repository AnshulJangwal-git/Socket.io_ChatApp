//express => express is a framework based on nodeJS
//nodemon => dev dependency(dependency which is only used during development not in production code) 
//socket.io => socket implement

const express = require("express") ;

const app = express() ;
//server is created!
// app.use(express.json()) ;  

app.use(express.static("public")) ;







//get method ki request on path / 
app.get("/home", function(request, response){
    console.log(request) ;

    response.send("Welcome to home page!") ;
})






app.listen(5500, function(){
    console.log("server started at port 5500 !!!") ;
})