import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"
import axios from "axios"
const Signup = () => {
  const [result,setresult] = useState(true)
  const [input,setinput] = useState({username:"",phonenumber:"",password:""})
  const Navigate = useNavigate()
  const Submithandler = (e)=>{
    e.preventDefault()
    axios({
      url : "https://restaurant-server-vicky.herokuapp.com/user/signup",
      method:"POST",
      headers:{

      },
      data : input
    }).then((res)=>{
       Navigate("/")
    }).catch((err)=>{
      setresult(false)
    })
  }
  return (
    <div className="RegisterPage">
      <div className='Register'>
      <div className='registersection'>
          <h3>Register</h3>
         <Link to="/"><span className="material-symbols-outlined">close</span></Link>
        </div>
        <hr/>
        <span className={result ? "hide" : "display"}>This User is Exist</span>
        <form className='form' onSubmit={(e)=>Submithandler(e)}>
          <div className='part1'>
            <label htmlFor='username' >Username</label><br />
            <input id='username' required onChange={(e)=>setinput({...input,username:e.target.value})} />
          </div >
          <div className='part1'>
            <label htmlFor='phone' >Phone Number</label><br />
            <input id='phone' required onChange={(e)=>setinput({...input,phonenumber:parseInt(e.target.value)})}/>
          </div >
          <div className='part1'>
            <label htmlFor='password'>Password </label><br />
            <input id='password' type="password" required onChange={(e)=>setinput({...input,password:e.target.value})}/>
          </div>
          <div className='registerbutton'>
            <button type='submit'>register</button>
          </div>
        </form>
        <div className='registerbotton'>
          <p>Already User ? </p>
         <Link to="/user/login"><p className='Hover'>Login</p></Link> 
        </div>
      </div>
    </div>
  )
}
export default Signup
