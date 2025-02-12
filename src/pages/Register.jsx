import React, { useState } from 'react'
import { registerUserApi } from '../service/allApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'

function Register() {
  const [data,setData]=useState({
    name:"",email:"",password:""
  })
  const nav=useNavigate()

  const onSubmitHandler=async(event)=>{
    event.preventDefault()
    const res=await registerUserApi(data)
    if(res.status==201){
        toast.success("user Logined");
        nav('/login')

    }else{
        toast.error(res.response.data.message);
        
    }
    
  }
  return (
    <div>
        <Navbar/>
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
         <p className='text-4xl'>Regiter</p>
         <hr className='border-none h-[1.5px] w-10 bg-gray-700' />
      </div>
     
      <input type="text " onChange={(e)=>{setData({...data,name:e.target.value})}}  className='w-full px-3 py-2 border border-gray-800'  placeholder='name' required/>
      
      <input type="email " onChange={(e)=>{setData({...data,email:e.target.value})}} className='w-full px-3 py-2 border border-gray-800'  placeholder='email' required/>
      <input type="password " onChange={(e)=>{setData({...data,password:e.target.value})}} className='w-full px-3 py-2 border border-gray-800'  placeholder='password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p ></p>
       
          <a href='/login' className='cursor-pointer'>login here</a>
        
      </div>
      <button className='bg-black px-8 py-2 mt-4 font-light text-white active:bg-gray-600'> sign-in</button>
    </form>
    <Footer/>
    </div>
  )
}

export default Register
