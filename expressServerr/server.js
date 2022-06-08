const express = require('express')
const fs = require('fs')
const app = express()

const { engine } = require('express-handlebars');


app.set('view engine','hbs')
app.set('views','./template')

app.use(express.static(__dirname + '/template'));
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));

app.get('/update',(req,res)=>{
    fs.readFile('./data.json','utf-8',(err,data)=>{
        let x = JSON.parse(data)
        
    })
})

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/admin',(req,res)=>{
    fs.readFile('./data.json','utf-8',(err,data)=>{
        fs.readFile('./template/admin.html','utf-8',(err,source)=>{
            let x = JSON.parse(data)
            res.render('admin',{ "data":x.items })
        })
    
    })
})


app.listen(3000,'127.0.0.1',()=>{
    console.log("server start");
})