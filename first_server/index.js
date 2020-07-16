//creating a server
const http = require('http');
const fs = require("fs")
const url = require("url");

const hostname = 'localhost';
const port = 3004;

const server = http.createServer((req, res)=>{
    console.log(req.url);
    // console.log(url.parse(req.url,true).query)
    // response.statusCode = 200;

    //set text to html to have it display in html
    // response.setHeader("Content-type", 'text/html');

    // response.end("Hello World")
    if(req.url === '/'){
        fs.readFile("./index.html","utf8",(err,data)=>{
            res.statusCode = 200;
            res.setHeader("content-type",'text/html')
            res.end(data)
            })
    } else if(req.url === "/style.css"){
        fs.readFile("./style.css", "utf8",(err,data)=>{
            res.statusCode = 200;
            res.setHeader("content-type", 'text/css');
            res.end(data)
        })
    }else if(req.url ===("/api")){
        let apiData=[
        {name:"Mike",age:"30"},
        {name:"Jon", age:"30"},
        {name:"Damian",age:"8"}
    ]
    let results = [...apiData];
    let query = url.parse(req.url,true).query;
    if (Object.keys(query).includes("name")){
        console.log(query.name)
        results = apiData.filter(l=>l.name.toLocaleLowerCase()===
        query.name.toLocaleLowerCase())
    }
        res.statusCode = 200;
        res.setHeader("content-type",'application/json')
        res.end(JSON.stringify(results))
    }else{
        res.statusCode = 404;
        res.setHeader("content-type", 'text/plain');
        res.end("the content is not here.")
    }
});



//127.0.0.1 === localhost
// server.listen(3000, '127.0.0.1',()=>console.log(`Server Running at http://localhost:3000`))
// server.listen(3000, '127.0.0.1',()=>console.log(`Server Running at http://${hostname}:${port}`))
server.listen(port,hostname,()=>console.log(`Server running at http://${hostname}:${port}`))