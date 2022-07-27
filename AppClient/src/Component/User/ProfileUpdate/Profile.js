import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Profile = () => {
    const [input, setinput] = useState({address: "", email: "",})
    const Navigate = useNavigate()
    const inputhandler = (e,id)=>{
       if(id==="email"){
        setinput({...input,email:e.target.value})
       }else{
        setinput({...input,address:e.target.value})
       }
    }
    const Submithandler = (e) => {
        e.preventDefault()
        axios({
            url: "https://restaurant-server-vicky.herokuapp.com/user/",
            method: "PUT",
            headers: {
               authiazation: localStorage.getItem("Auth")
            },
            data: input
        }).then((res) => {
            Navigate("/user")
        }).catch((err) => {
        })
    }
    return (
        <div className="RegisterPage">
            <div className='Register Profileform'>
                <div className='registersection'>
                    <h3>Profile Update</h3>
                    <Link to="/user"><span className="material-symbols-outlined">close</span></Link>
                </div>
                <hr />
                <form className='form' onSubmit={(e) => Submithandler(e)}>
                    <div className='part1'>
                        <label htmlFor='username' >Email</label><br />
                        <input id='username'  required onChange={(e) => inputhandler(e,"email")} />
                    </div >
                    <div className='part1'>
                        <label htmlFor='password'>Address</label><br />
                        <textarea id='password'  type="password" required onChange={(e) => inputhandler(e,"address")} />
                    </div>
                    <div className='registerbutton '>
                        <button className='profilebtn' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile
