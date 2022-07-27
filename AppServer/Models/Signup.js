const mongoose = require("mongoose")

const signup = new mongoose.Schema({
    username : String,
    phonenumber:Number,
    password:String,
    address:String,
    email:String,
    profile:String
})

const Signupmodel = mongoose.model("users",signup)
module.exports = Signupmodel