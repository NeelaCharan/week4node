const mongoose=require('mongoose');
const ms=mongoose.Schema({
    id:Number,
    name:String,
    marks:Number
});
module.exports=mongoose.model('post',ms);