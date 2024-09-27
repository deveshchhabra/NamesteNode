const http=require("node:http");
const server=http.createServer(function(req,res){
    if(req.url==="\get"){
        res.end("These is no Secrete Data")
    }
    res.end("Hello World!");
})
server.listen(7777);