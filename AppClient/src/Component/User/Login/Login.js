import React, {useState } from 'react'
import "./style.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
const Login = () => {
  const [result,setresult] = useState(true)
  const [input,setinput] = useState({username:"",password:""})
  const Navigate = useNavigate()
  const Submithandler = (e)=>{
    e.preventDefault()
    axios({
      url : "https://restaurant-server-vicky.herokuapp.com/user/login",
      method:"POST",
      headers:{
       
      },
      data : input
    }).then((res)=>{
       setresult(true)
       localStorage.setItem("user",input.username)
       localStorage.setItem("Auth",res.data.AuthToken)
       Navigate("/")
    }).catch((err)=>{
      setresult(false)
    })
    setinput({username:"",password:""})
  }
  return (
    <div className="LoginPage">
      <div className='login'>
        <div className='loginsection'>
          <h3>Login</h3>
         <Link to="/"><span className="material-symbols-outlined">
            close
          </span></Link>
        </div>
        <hr />
        <span className={result ? "hide" : "display"}>Username and Password Does't Match</span>
        <form className='form' onSubmit={(e)=>Submithandler(e)}>
          <div className='part1'>
            <label htmlFor='username' >Username</label><br />
            <input id='username' required onChange={(e)=>setinput({...input,username:e.target.value})} value={input.username}/>
          </div >
          <div className='part1'>
            <label htmlFor='password'>Password </label><br />
            <input id='password' type="password" required onChange={(e)=>setinput({...input,password:e.target.value})} value={input.password}/>
          </div>
          <div className='loginbutton'>
            <button type='submit'>Login</button>
          </div>
        </form>
        <div className='formbotton'>
          <div className='part1'>
          <Link to="/user/forgot"><p className='forgot'>Forgot Password?</p></Link>
          <Link to="/user/update"> <p className='update' >Update Password?</p></Link>
          </div>
          <div>
            <Link to="/user/signup"><p className='Newregister'>New Register ?</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
