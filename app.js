const express = require('express');

const Routes = require("./routes");

const app =  express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");

app.use(morgan('dev'));

try{
 mongoose.connect('mongodb://dbtiwari:iwonttell@cluster0-shard-00-00-lgljq.mongodb.net:27017,cluster0-shard-00-01-lgljq.mongodb.net:27017,cluster0-shard-00-02-lgljq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true});
}catch(e)
{
    console.log(e);
}
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",'*');
    res.header("Access-Control-Allow-Headers",'*');
    if(req.method === 'OPTIONS')
    {
        res.header("Access-Control-Allow-Methods",'*');
    }
    next();
})

app.use(Routes);

module.exports=app;