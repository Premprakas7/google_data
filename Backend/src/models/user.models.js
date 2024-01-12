const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    call:{type:String, required:true},
    message:{type:String, required:true},
    direction:{type:String, required:true},
    visits:{type:String, required:true},
    views:{type:String, required:true},
    search:{type:String, required:true},
},
{
    versionKey: false,
    timestamps:true
}
)
module.exports=mongoose.model("users",userSchema)