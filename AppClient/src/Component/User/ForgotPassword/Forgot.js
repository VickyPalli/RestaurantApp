import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"
import axios from "axios"

const Forgot = () => {
  const [result,setresult] = useState(true)
  const [input,setinput] = useState({username:"",password:""})
  const Navigate = useNavigate()
  const Submithandler = (e)=>{
    e.preventDefault()
    axios({
      url : "https://restaurant-server-vicky.herokuapp.com/user/forgot",
      method:"PUT",
      headers:{
        
      },
      data : input
    }).then((res)=>{
       Navigate("/user/login")
    }).catch((err)=>{
      setresult(false)
    })
    setinput({username:"",password:""})
  }
  return (
    <div className="RegisterPage">
      <div className='Register'>
      <div className='registersection'>
          <h3>Forgot Password</h3>
         <Link to="/user/login"><span className="material-symbols-outlined">close</span></Link>
        </div>
        <hr/>
        <span className={result ? "hide" : "display"}>Invalid Username</span>
        <form className='form' onSubmit={(e)=>Submithandler(e)}>
          <div className='part1'>
            <label htmlFor='username' >Username</label><br />
            <input id='username' required onChange={(e)=>setinput({...input,username:e.target.value})} value={input.username}/>
          </div >
          <div className='part1'>
            <label htmlFor='phone' >New Password</label><br />
            <input id='phone' required type="password" onChange={(e)=>setinput({...input,password:e.target.value})} value={input.password}/>
          </div >
          <div className='registerbutton'>
            <button type='submit'>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Forgot
