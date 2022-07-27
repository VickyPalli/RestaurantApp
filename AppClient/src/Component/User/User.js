import React, { useEffect, useState } from 'react'
import Logo from "../Images/Logo.jpg"
import { Link, useNavigate } from 'react-router-dom'
import Pic from "./Images/Pic.png"
import axios from "axios"
import "./style.css"
const User = () => {
    const Navigate = useNavigate()
    const [input, setinput] = useState([{ address: "", email: "", username: "", profile: "", phonenumber: "" }])
    const [image, setimage] = useState({ profile: "" })
    const [value, setvalue] = useState(true)
    useEffect(() => {
        axios({
            url: "https://restaurant-server-vicky.herokuapp.com/user/",
            method: "GET",
            headers: {
                authiazation: localStorage.getItem("Auth")
            },
            data: {}
        }).then((res) => {
            setinput(res.data)
        })
    }, [value])
    let user = localStorage.getItem("user")
    if (user) {
        user = user.toUpperCase()
    }
    const logouthandler = () => {
        localStorage.setItem("user", "")
        localStorage.setItem("Auth", "")
        Navigate("/")
    }
    const convertbase64 = (file) => new Promise((res, rej) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => res(reader.result)
        reader.onerror = (err) => rej(err)
    })
    const uploadhandler = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertbase64(file)
        setimage({ profile: base64 })
    }
    const Submithandler = (e) => {
        e.preventDefault()
        if (image.profile) {
            axios({
                url: "https://restaurant-server-vicky.herokuapp.com/user/upload",
                method: "PUT",
                headers: {
                    authiazation: localStorage.getItem("Auth")
                },
                data: image
            }).then((res) => {
                setvalue(!value)
            }).catch((err) => {
            })
        } else {
            console.log("Hello")
            alert("Please Select Image To Upload")
            return;
        }

    }
    return (
        <>
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
                    <h1>Your Profile Here</h1>
                </div>
                <div className='heading'>
                    {
                        input[0].profile ? <img src={input[0].profile} alt="" /> : <img src={Pic} alt="" />
                    }
                </div>
                <form className='heading' onSubmit={(e) => Submithandler(e)}>
                    <label htmlFor="profile">Select Image</label>
                    <input id="profile" type="file" onChange={(e) => uploadhandler(e)} />
                    <button type='submit'>Upload</button>
                </form>
                <div className='profile'>
                    <span style={{ "fontWeight": "bold" }}> UserName</span>  : <span> {input[0].username}</span><br />
                    <span style={{ "fontWeight": "bold" }}> Contant Number</span>  : <span>{input[0].phonenumber}</span>
                </div>
                <div className='profile'>
                    <div>
                        <span style={{ "fontWeight": "bold" }}>Email</span> <Link to="/user/profile"><button>edit</button></Link>
                    </div><hr />
                    <div>
                        <div className='email'>
                            {
                                input[0].email
                            }
                        </div>
                    </div>
                </div>
                <div className='profile'>
                    <div>
                        <span style={{ "fontWeight": "bold" }}>Address</span> <Link to="/user/profile"><button>edit</button></Link>
                    </div><hr />
                    <div>
                        <div className='email Adrees'>
                               <span className='address'>{input[0].address}</span>
                        </div>
                    </div>
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
        </>

    )
}

export default User
