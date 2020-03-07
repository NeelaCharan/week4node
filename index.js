const conn=require('./database/connect');
const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
const routes=require('./routes/routes');
app.use(routes);  
app.listen(3000,()=>{
    console.log("running on server 3000");
})