import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

name:{
    type : String,
    required : true
},
email:{
    type : String,
    required : true, 
    unqiue : true
},
password:{
    type : String,
    required : true
}
})

export const user = mongoose.model("user" , userSchema)