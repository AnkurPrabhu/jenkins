const express =require('express');

const app= express();

app.get('/',function(req,res){
res.status(200).send("hello world");
});

app.get('/about',function(req,res){
    res.status(200).send("about page");
    });
app.get('/home',function(req,res){
        res.status(200).send("home page");
        });
app.listen(3000,function(){
    console.log('server started on port 3000..');
});