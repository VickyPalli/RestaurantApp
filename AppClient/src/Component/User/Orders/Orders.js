import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import Logo from "../../Images/Logo.jpg"
const Orders = () => {
    const [order, setorder] = useState([])
    const Navigate = useNavigate()
    let user = localStorage.getItem("user")
    if (user) {
        user = user.toUpperCase()
    }
    const logouthandler = () => {
        localStorage.setItem("user", "")
        localStorage.setItem("Auth", "")
        Navigate("/")
    }
    useEffect(() => {
        axios({
            url: "https://restaurant-server-vicky.herokuapp.com/user/orders",
            method: "GET",
            headers: {
                authiazation: localStorage.getItem("Auth")
            },
            data: {}
        }).then((res) => {
            const result = res.data.reverse()
            setorder(result)
        })
    }, [])
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
                <h1>Your Orders</h1>
            </div>
            <div className='vegetarian'>
        {order.map((item,idx)=>{
          return (
            <div className='CartSection' key={idx}>
            <div className='cart'>
              <h5>{item.Itemid}</h5>
              <img src={item.image} alt=''  />
            </div>
            <div className='cartsecond'>
              <h6>Rs. {item.price}</h6>
            </div>
            <div className='cartdes'>
              <h6>{item.desc}</h6>
            </div>
            <div className='Status'>
                <h6 style={{"color":"red"}}>{item.Status}</h6>
            </div>
          </div>
          )
        })}
      </div> 
        </div>
    )
}

export default Orders
