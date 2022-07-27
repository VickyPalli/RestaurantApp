const Express = require("express")
const Signupmodel = require("../Models/Signup")
const CartModel = require("../Models/Cart")
const OrderModel = require("../Models/Order")
const app = Express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()


app.put("/",(req,res)=>{
    try{
        const {username} = jwt.verify(req.headers.authiazation,process.env.SECRET_KEY)
        if(username){
           Signupmodel.updateOne({username:username},{$set : req.body}).then((user)=>{
            res.status(200).json(user)
           })
        }else{
            res.status(400).json("UnAuthorized User")
        }
    }catch(err){
        res.status(400).json("UnAuthorized User")
    }
})
app.put("/upload",(req,res)=>{
    try{
        const {username} = jwt.verify(req.headers.authiazation,process.env.SECRET_KEY)
        if(username){
           Signupmodel.updateOne({username:username},{$set : req.body}).then((user)=>{
            res.status(200).json(user)
           })
        }else{
            res.status(400).json("UnAuthorized User")
        }
    }catch(err){
        res.status(400).json("UnAuthorized User")
    }
})
app.get("/",(req,res)=>{
    try{
        const {username} = jwt.verify(req.headers.authiazation,process.env.SECRET_KEY)
        if(username){
           Signupmodel.find({username:username}).then((user)=>{
            res.status(200).json(user)
           })
        }else{
            res.status(400).json("UnAuthorized User")
        }
    }catch(err){
        res.status(400).json("UnAuthorized User")
    }
})
app.post("/signup",(req,res)=>{
    Signupmodel.find({username:req.body.username}).then((user)=>{
        if(user.length){
            res.status(400).json()
        }else{
            const salt = 10;
            bcrypt.genSalt(salt).then((hashsalt)=>{
                bcrypt.hash(req.body.password,hashsalt).then((hashpassword)=>{
                    Signupmodel.create({
                        username:req.body.username,
                        password:hashpassword,
                        phonenumber:req.body.phonenumber,
                        address:"",
                        email:"",
                        profile:""
                    }).then((user)=>{
                        res.status(200).json("User Has Added")
                    }).catch((err)=>{
                        res.status(400).json("Network Issue")
                    })
                }).catch((err)=>{
                    res.status(400).json("Hashing Issue")
                })
            }).catch((err)=>{
                res.status(400).json("Hashing Salt Issue") 
            })
        }
    }).catch((err)=>{
        res.status(400).json("Network Issue")
    })
})

app.post("/login",(req,res)=>{
    Signupmodel.find({username : req.body.username}).then((user)=>{
        if(user.length){
           bcrypt.compare(req.body.password,user[0].password).then((result)=>{
            if(result){
            const Token =  jwt.sign({username : req.body.username},process.env.SECRET_KEY)
            res.status(200).json({AuthToken :Token})
            }else{
                res.status(400).json("Invalid Password")
            }
           })
        }else{
            res.status(400).json("Invalid Username")
        }
    })
})

app.put("/forgot",(req,res)=>{
    Signupmodel.find({username:req.body.username}).then((user)=>{
        if(user.length){
            const salt = 10;
            bcrypt.genSalt(salt).then((hashsalt)=>{
                bcrypt.hash(req.body.password,hashsalt).then((hashpassword)=>{
                    Signupmodel.updateOne({username:req.body.username},{$set:{password:hashpassword}}).then((user)=>{
                        res.status(200).json("Password Has Been Updated")
                    }).catch((err)=>{
                        res.status(400).json("Network Issue")
                    })
                }).catch((err)=>{
                    res.status(400).json("Hashing Issue")
                })
            }).catch((err)=>{
                res.status(400).json("Hashing Salt Issue") 
            }) 
        }else{
            res.status(400).json()
        }
    })
})
app.put("/update",(req,res)=>{
   Signupmodel.find().then((user)=>{
    if(user.length){
       bcrypt.compare(req.body.oldpassword,user[0].password).then((value)=>{
        if(value){
            const salt = 10;
            bcrypt.genSalt(salt).then((hashsalt)=>{
                bcrypt.hash(req.body.newpassword,hashsalt).then((hashpassword)=>{
                    Signupmodel.updateOne({username:req.body.username},{$set:{password:hashpassword}}).then((user)=>{
                        res.status(200).json("Password Has Been Updated")
                    }).catch((err)=>{
                        res.status(400).json("Network Issue")
                    })
                }).catch((err)=>{
                    res.status(400).json("Hashing Issue")
                })
            }).catch((err)=>{
                res.status(400).json("Hashing Salt Issue") 
            }) 
        }else{
            res.status(400).json()  
        }
       })
    }else{
        res.status(400).json()
    }
   })
})

app.post("/cart",(req,res)=>{
    try{
        const {username} = jwt.verify(req.headers.authiazation,process.env.SECRET_KEY)
        if(username){
            CartModel.create({Itemid:req.body.Itemid,userid:username,image:req.body.image,price:req.body.price,desc:req.body.desc}).then((cart)=>{
                res.status(200).json("Cart Has Added")
               }).catch((err)=>{
                res.status(400).json("Network Issue")
               })
        }else{
            res.status(400).json("UnAuthorized User")
        }
    }catch(err){
        res.status(400).json("UnAuthorized User")
    }
})
app.get("/cart",(req,res)=>{
    try{
        const {username} = jwt.verify(req.headers.authiazation,process.env.SECRET_KEY)
        if(username){
            CartModel.find({userid:username}).then((carts)=>{
                res.status(200).json(carts)
               }).catch((err)=>{
                res.status(400).json("Network Issue")
               })
        }else{
            res.status(400).json("UnAuthorized User")
        }
    }catch(err){
        res.status(400).json("UnAuthorized User")
    }
})

app.post("/orders",(req,res)=>{
    try{
        const {username} = jwt.verify(req.headers.authiazation,process.env.SECRET_KEY)
        if(username){
            OrderModel.create({Itemid:req.body.Itemid,userid:username,image:req.body.image,Status:"Order Has Delivered",desc:req.body.desc,price:req.body.price}).then((Order)=>{
                res.status(200).json("Order Has Added")
               }).catch((err)=>{
                res.status(400).json("Network Issue")
               })
        }else{
            res.status(400).json("UnAuthorized User")
        }
    }catch(err){
        res.status(400).json("UnAuthorized User")
    }
})

app.get("/orders",(req,res)=>{
    try{
        const {username} = jwt.verify(req.headers.authiazation,process.env.SECRET_KEY)
        if(username){
            OrderModel.find({userid:username}).then((orders)=>{
                res.status(200).json(orders)
               }).catch((err)=>{
                res.status(400).json("Network Issue")
               })
        }else{
            res.status(400).json("UnAuthorized User")
        }
    }catch(err){
        res.status(400).json("UnAuthorized User")
    }
})
app.delete("/delete/:id",(req,res)=>{
    try{
        const {username} = jwt.verify(req.headers.authiazation,process.env.SECRET_KEY)
        if(username){
            CartModel.deleteOne({_id:req.params.id}).then((result)=>{
                res.status(200).json("Item Has Deleted")
            })
        }else{
            res.status(400).json("UnAuthorized User")
        }
    }catch(err){
        res.status(400).json("UnAuthorized User")
    }
})




module.exports = app;