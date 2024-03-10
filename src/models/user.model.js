import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
       type:String, 
       required:true,
       unique:true
    },
    password: {
        type:String,
        required:true,
    },
    role:{
        type:Boolean,
        default:false//false=normal true=admin
    }
})

export default mongoose.model('User', userSchema)