const mongoose = require("mongoose")
const CartSchema = new mongoose.Schema({
    Itemid : String,
    userid : String,
    image : String,
    price : String,
    desc:String
})

const CartModel = mongoose.model("Carts",CartSchema)
module.exports = CartModel;