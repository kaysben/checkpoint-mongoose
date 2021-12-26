const mongoose=require("mongoose")



const contactSchema= new mongoose.Schema ({

 firstname:{type:String,required:true},
 lastname:{type:String,required:true},
 age:{type:Number,required:true},
 email:{type:String,required:true,unique:true},


})
module.exports=mongoose.model("conntact",contactSchema)