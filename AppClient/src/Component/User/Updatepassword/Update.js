import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Update = () => {
    const [result,setresult] = useState(true)
    const [input,setinput] = useState({username:"",oldpassword:"",newpassword:""})
    const Navigate = useNavigate()
    const Submithandler = (e)=>{
      e.preventDefault()
      axios({
        url : "https://restaurant-server-vicky.herokuapp.com/user/update",
        method:"PUT",
        headers:{
          
        },
        data : input
      }).then((res)=>{
         Navigate("/user/login")
      }).catch((err)=>{
        setresult(false)
      })
      setinput({username:"",oldpassword:"",newpassword:""})
    }
    return (
      <div className="RegisterPage">
        <div className='Register'>
        <div className='registersection'>
            <h3>Update Password</h3>
           <Link to="/user/login"><span className="material-symbols-outlined">close</span></Link>
          </div>
          <hr/>
          <span className={result ? "hide" : "display"}>Invalid Credentials</span>
          <form className='form' onSubmit={(e)=>Submithandler(e)}>
            <div className='part1'>
              <label htmlFor='username' >Username</label><br />
              <input id='username' required onChange={(e)=>setinput({...input,username:e.target.value})} value={input.username}/>
            </div >
            <div className='part1'>
              <label htmlFor='phone' >Old Password</label><br />
              <input id='phone' required onChange={(e)=>setinput({...input,oldpassword:e.target.value})} value={input.oldpassword}/>
            </div >
            <div className='part1'>
              <label htmlFor='phone' >New Password</label><br />
              <input id='phone' required onChange={(e)=>setinput({...input,newpassword:e.target.value})} value={input.newpassword}/>
            </div >
            <div className='registerbutton'>
              <button type='submit'>Update Password</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Update
