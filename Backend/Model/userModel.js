const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    pass:{type:String,required:true},
    role:{
        type:String,
        required:true,
        default:"User",
        enum:["Admin","User"]
    },
    status:{
        type:String,
        required:true,
        default:"Active",
        enum:["Active","Inactive"]
    }

},{versionKey:false , timestamps: true })

const users=mongoose.model("user",userSchema)


module.exports={users} 