const express = require('express')
const fs = require('fs')
const app = express()
let bodyParser = require('body-parser')
const { engine } = require('express-handlebars');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','hbs')
app.set('views','./template')

app.use(express.static(__dirname + '/template'));
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));

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

app.post('/save',(req,res)=>{
    let name = req.body.name
    let phno = req.body.phno
    fs.readFile('./data.json','utf-8',(err,data)=>{
        var x = JSON.parse(data)
        x.items.push({"date":name,"phone":phno})
        console.log(x);
        fs.writeFile('./data.json',JSON.stringify(x),(err,d)=>{
            console.log(err);
        })
    })
    //  fs.writeFile('./data.json',x,()=>{
    //      console.log("write");
    //  })
    
    

})

app.listen(3000,'127.0.0.1',()=>{
    console.log("server start");
})