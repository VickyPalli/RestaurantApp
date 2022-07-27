import React, { useEffect, useState } from 'react'
import "./style.css"
import Logo from "../Images/Logo.jpg"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Vegetarian = () => {
  const Navigate = useNavigate()
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get("https://api.npoint.io/02706913fa874bbd1665").then((res) => {
      setdata(res.data.Sheet1)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  let user = localStorage.getItem("user")
  if (user) {
    user = user.toUpperCase()
  }
  const logouthandler = () => {
    localStorage.setItem("user", "")
    localStorage.setItem("Auth","")
    Navigate("/")
}
  const CartHandler = (id,imageid,rupee,Desc)=>{
    if(user){
      const input ={Itemid : id,image:imageid,price:rupee,desc:Desc}
      axios({
       url : "https://restaurant-server-vicky.herokuapp.com/user/cart",
       method:"POST",
       headers:{
         authiazation : localStorage.getItem("Auth")
       },
       data : input
      })
    }else{
      Navigate("/user/login")
    }
  }
  const orderHandler = (id,imageid,Desc,Price)=>{
    if(user){
      const input ={Itemid : id,image:imageid,desc:Desc,price:Price}
      axios({
       url : "https://restaurant-server-vicky.herokuapp.com/user/orders",
       method:"POST",
       headers:{
         authiazation : localStorage.getItem("Auth")
       },
       data : input
      })
    }else{
      Navigate("/user/login")
    }
  }
  return (
    <div>
     <nav className="navbar navbar-expand-lg NavBar">
                <div className="container">
                    <Link to="/"><span className="navbar-brand"><img className='Logo' src={Logo} alt="" /></span></Link>
                    <button className="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                                <Link to='/vegetarian'><span className="nav-link active" aria-current="page">Veg</span></Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/nonvegetarian'><span className="nav-link active" aria-current="page">Non-Veg</span></Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/caterings"><span className="nav-link active" aria-current="page">Services</span></Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/contant" ><span className="nav-link active" aria-current="page" >Contant Us</span></Link>
                            </li>
                            <li className="nav-item me-2">
                                {user ? <Link to="/user"> <span className="nav-link active Extra" aria-current="page">{user}</span></Link> : <Link to="/user/login"><span className="nav-link active" aria-current="page">Log In</span></Link>}
                            </li>
                            <li className="nav-item me-3">
                                {user ? <span className="nav-link active Extra" aria-current="page" onClick={logouthandler}>Logout</span> : <Link to="/user/signup"><span className="nav-link active">Sign Up</span></Link>}
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/user/cart" ><span className="nav-link active" aria-current="page" ><span className="material-symbols-outlined">
                                    shopping_cart
                                </span>Cart</span></Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/user/orders" ><span className="nav-link active" aria-current="page" >Orders</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      <div className='heading'>
        <h1>Ganesh Restaurant Vegetarian Cuisines</h1>
      </div>
      <div className='vegetarian'>
        {data.map((item,idx)=>{
          return (
            <div className='CartSection' key={idx}>
            <div className='cart'>
              <h5>{item.Name}</h5>
              <img src={item.item_image} alt=''  />
            </div>
            <div className='cartsecond'>
              <h6>Rs. {item.rupee}</h6>
            </div>
            <div className='cartdes'>
              <h6>{item.title}</h6>
            </div>
            <div className='cartbutton'>
              <button onClick={(e)=>{CartHandler(item.Name,item.item_image,item.rupee,item.title)}}>Add To Cart</button>
              <button onClick={(e)=>{orderHandler(item.Name,item.item_image,item.title,item.rupee)}}>Order Now</button>
            </div>
          </div>
          )
        })}
      </div>
      <div className='vegetarianfoot'>
        <h3>Ganesh Restaurant And Daba</h3>
        <div>
          For More Information Please Visit Our Restaurant
        </div>
        <div>
          Near Bustand, bajaj Home Complex
        </div>
        <div>
          Srikalahasti , Tirupati - Bangalore High Road
        </div>
      </div>
    </div>
  )
}

export default Vegetarian
