const http =  require('http')

const fs = require('fs')

const server = http.createServer((req,res)=>{
    // fs.readFile('home.html');  
    if(req.url == "/home"){
        fs.readFile('home.html',(error, data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }
    else if(req.url =='/style'){
        fs.readFile('style.css',(error, data)=>{
            res.writeHead(200,{'Content-Type':'text/css'})
            res.write(data)
            return res.end()
        })
    }
    else{
        fs.readFile('default.html',(error, data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is start successfully');
})


