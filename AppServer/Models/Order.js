const mongoose = require("mongoose")
const OrderSchema = new mongoose.Schema({
    Itemid : String,
    userid : String,
    image : String,
    Status : String,
    desc:String,
    price:String
})

const OrderModel = mongoose.model("Orders",OrderSchema)
module.exports = OrderModel;