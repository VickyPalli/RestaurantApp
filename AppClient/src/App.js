import React from 'react'
import "./App.css"
import Home from './Component/Home/Home'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Vegetarian from './Component/Vegetarian/Vegetarian'
import NonVegetarian from './Component/NonVegetarian/NonVegetarian'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import User from './Component/User/User'
import Login from './Component/User/Login/Login'
import Signup from './Component/User/Signup/Signup'
import Cart from './Component/User/Cart/Cart'
import Orders from './Component/User/Orders/Orders'
import Catering from './Component/Catering/Catering'
import Contant from './Component/Contant/Contant'
import Update from './Component/User/Updatepassword/Update'
import Forgot from './Component/User/ForgotPassword/Forgot'
import Profile from './Component/User/ProfileUpdate/Profile'
const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route  path='/' element ={<Home/>}></Route>
      <Route  path='/vegetarian' element ={<Vegetarian/>}></Route>
      <Route  path='/nonvegetarian' element ={<NonVegetarian/>}></Route>
      <Route  path='/user' element ={<User/>}/>
      <Route path="/user/login" element={<Login/>}></Route>
      <Route path= "/user/signup" element={<Signup/>}></Route>
      <Route path="/user/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}></Route>
      <Route path="/user/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>}></Route>
      <Route path="/user/forgot" element={<Forgot/>}></Route>
      <Route path="/user/update" element={<Update/>}></Route>
      <Route path='/caterings' element={<Catering/>}/>
      <Route path='/contant' element={<Contant/>}/>
      <Route path='/user/profile' element={<Profile/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
