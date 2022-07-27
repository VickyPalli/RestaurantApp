import React from 'react'
import "./Header.css"
import Logo from "../../Images/Logo.jpg"
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
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
    return (
        <div className='header'>
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
            <div className='Mainsection'>
                <h1>Ganesh Restaurant And Daba</h1>
                <ul>
                    <li>
                        Good food is the foundation of genuine happiness
                    </li>
                    <li>
                        Food is not rational. Food is culture, habit, craving, and identity
                    </li>
                </ul>
                <Link to="/caterings"><button >Caterings Book Now</button></Link>
            </div>
        </div>
    )
}

export default Header
