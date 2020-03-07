const express=require('express');
const routes=express.Router();
const post=require('../model/post');

routes.get('/',async(req,res)=>{
    const mark=await post.find();
    res.json(mark);
});
routes.post('/',async(req,res)=>{
    const mark=new post({
        "id":req.body.id,
        "name":req.body.name,
        "marks":req.body.marks
    })
    const save=await mark.save();
    res.json(save);
    console.log("object added");
})
routes.delete('/:name',async(req,res,err)=>{
    if(err) console.log("error");
    const rem=await post.remove({"name":req.params.name});
    res.json(rem);
    console.log("object removed");
});
routes.put('/:id',async(req,res)=>{
    post.findByIdAndUpdate({_id:req.params.id},{$set:{name:req.body.name}},(err,res)=>{
       
        console.log("updated");
    })       
    })
module.exports=routes;