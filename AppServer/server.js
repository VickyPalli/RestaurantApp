const Express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = Express()
const userController = require("./Routes/User")
app.use(Express.json({limit:"30mb",extended:true}))
app.use(Express.urlencoded({extended:false}))
app.use(cors())

const Connection_Url = "mongodb+srv://yash:yash@app.fmxq6.mongodb.net/Restaurant"
const Port = process.env.PORT ||  5003;

mongoose.connect(Connection_Url).then(()=>{
    app.listen(Port,(err)=>{
        if(!err){
            console.log(`The Server running at ${Port} And Db Has Connected`)
        }
    })
}).catch((err)=>{
    console.log(err)
})





app.use("/user",userController)