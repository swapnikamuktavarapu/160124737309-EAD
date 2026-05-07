const http=require("http")
http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{"content-type":'text/html'});
        res.write('<h1>home</h1>');
        res.end();
    }
    else if(req.url==='/about')
    {
        res.writeHead(200,{"content-type":'text/html'});
        res.write('<h1>about</h1>');
        res.end();
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{"content-type":'text/html'});
        res.write('<h1>contact</h1>');
        res.end();
    }
    else{
         res.writeHead(404,{"content-type":'text/html'});
        res.write('<h1>page not found</h1>');
        res.end();
    }
}).listen(3001,()=>{
    console.log("server running successfully ");
})