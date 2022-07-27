import React from 'react'
import Logo from "../Images/Logo.jpg"
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"
import Email from "../Images/Email.png"
import Call from "../Images/Call.png"
import Loc from "../Images/Loc.png"
const Contant = () => {
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
    alert("Please Confirm To Submit Your Request")
    Navigate("/")
  }
  return (
    <div >
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
      <div className='Contantbody'>
        <div className='contant'>
          <div className='child'>
            <img src={Loc} alt="" />
            <h4>Address</h4>
            <div>
              <p>Ganesh Restaurant And Daba,Near Bustand , Appsdc Complex</p>
              <p>Tirupati And Bangalore High Way,Srikalahasti - 524127</p>
              <p>Chittor Dist , A.P</p>
            </div>
          </div>
          <div className='child'>
            <img src={Call} alt="" />
            <h4>Call</h4>
            <div>
              Phone : <span>123456</span>
            </div>
            <div >
              <span style={{ "fontWeight": "bold" }}>What's up</span>  : 789456
            </div>
          </div>
          <div className='child'>
            <img src={Email} alt="" />
            <h4>Email</h4>
            <div>
              <div>
                <span style={{ "fontWeight": "bold" }}>email</span>  : skht.gani@ga.co.in
              </div>
              <div>
                <span style={{ "fontWeight": "bold" }}>email</span>  : skht.gani.orders@ga.co.in
              </div>
            </div>
          </div>
        </div>
        <div className='help'>
          <h3>Contant us For Any Information</h3>
        </div>
        <form className='contantForm' onSubmit={(e)=>SubmitHandl(e)}>
          <div className='Form1'>
            <input type="text" placeholder='Name' required />
            <input type="text" placeholder='Email' required />
          </div>
          <div className='Form1' >
            <input type="text" placeholder='PhoneNumber' required />
            <input type="text"  placeholder='Subject' required/>
          </div>
          <div className='Form1' >
            <textarea placeholder='Type Your Message Here' rows="5"></textarea>
          </div>
          <div className='contantbutton'>
          <button type='submit'>Submit</button>
          </div>
        </form>
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

export default Contant
