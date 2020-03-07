const express=require('express');
const app=express();
const mongoose=require('mongoose');
const post=require('./model/post')
const bodyparser=require('body-parser');
app.use(bodyparser.json());
mongoose.connect('mongodb://127.0.0.1:27017/student',(err)=>{
    if(err) throw err
    else
    console.log("connected to mongo database");
});

app.get('/',async(req,res)=>{
const s=await post.find();
console.log(s);
res.json(s);

});
app.listen(2500,()=>{
    console.log("servefr is listen port 2500");
});