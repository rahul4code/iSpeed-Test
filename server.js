const express=require('express');
let app=express();

app.get('/',function(req,res)
{
res.send('Hello World!');
});

var server=app.listen(3000,function() {});