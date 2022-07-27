import React from 'react'
import "./style.css"
import Logo from "../Images/Logo.jpg"
import { Link, useNavigate } from 'react-router-dom'
import Img1 from "./Images/Img1.jpg"
import Img2 from "./Images/Img2.jpg"
import Img3 from "./Images/Img3.jpg"
import Img4 from "./Images/Img4.jpg"
import Img5 from "./Images/Img5.jpg"
import Img6 from "./Images/Img6.jpeg"
const Catering = () => {
  const Navigate = useNavigate()
  let user = localStorage.getItem("user")
  if (user) {
    user = user.toUpperCase()
  }
  const logouthandler = () => {
    localStorage.setItem("user", "")
    localStorage.setItem("Auth","")
    Navigate("/")
}
  const SubmitHandl = (e)=>{
    e.preventDefault()
      alert("Please Confirm For Catering Booking")
      Navigate("/")
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
      <div className='cateringhead'>
         <h1>Ganesh Caterings Services</h1>
      </div>
      <div className='container cateringsbody'>
        <div className='cateringchild'>
          <img src={Img1} alt=""/>
          <h5>South Indian Pure Vegetarian Special Rs.250/Plate</h5>
        </div>
        <div className='cateringchild'>
          <img src={Img2} alt=""/>
          <h5>Indian Traditional Cuisines  Rs.150/Plate</h5>
        </div>
        <div className='cateringchild'>
          <img src={Img3} alt=""/>
          <h5>North Indian Non-Vegetarian Cuisines  Rs.350/Plate</h5>
        </div>
        <div className='cateringchild'>
          <img src={Img4} alt=""/>
          <h5>KalaHasti Special Cuisines  Rs.300/Plate</h5>
        </div>
        <div className='cateringchild'>
          <img src={Img5} alt=""/>
          <h5>Best Catering Bufe Syatem</h5>
        </div>
        <div className='cateringchild'>
          <img src={Img6} alt=""/>
          <h5>Clean And Displain Bufe Syatem</h5>
        </div>

      </div>
      <div className='help m-5'>
          <h3>Contant us For Caterings</h3>
        </div>
      <form className='contantForm m-5' action='' onSubmit={(e)=>SubmitHandl(e)}>
          <div className='Form1'>
            <input type="text" placeholder='Name' required />
            <input type="text" placeholder='Email' required />
          </div>
          <div className='Form1' >
            <input type="text" placeholder='PhoneNumber' required />
            <input type="text"  placeholder='Function Name' required/>
          </div>
          <div className='Form1' >
            <textarea placeholder='Type Your Address Here' rows="5"></textarea>
          </div>
          <div className='contantbutton'>
            <button type='submit'>Submit</button>
          </div>
        </form>
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

export default Catering
