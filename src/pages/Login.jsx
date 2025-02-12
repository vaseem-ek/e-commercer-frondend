import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../service/allApi'
import toast from 'react-hot-toast'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'

function Login() {
  const [data,setData]=useState({
    email:"",password:""
  })
  const nav=useNavigate()

  const onSubmitHandler=async(event)=>{
    event.preventDefault()
    const result = await loginUser(data)
    console.log(result)
    if (result.status == 200) {
        if(result.data.user.role=='user'){
            nav('/')
            toast.success('login success')
            sessionStorage.setItem('token', result.data.token)
            sessionStorage.setItem('user', JSON.stringify(result.data.user))
        }
        else{
            sessionStorage.setItem('token', result.data.token)
            sessionStorage.setItem('user', JSON.stringify(result.data.user))
            toast.success('login success')
            nav('/admin/dash')
        }
    } else {
        toast.warning(result.response.data.message)
    }
  }
  return (
    <div>
      <Navbar/>
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
         <p className='text-4xl'>Login</p>
         <hr className='border-none h-[1.5px] w-10 bg-gray-700' />
      </div>
      
     
      
      <input type="email " onChange={(e)=>{setData({...data,email:e.target.value})}} className='w-full px-3 py-2 border border-gray-800'  placeholder='email' required/>
      <input type="password " onChange={(e)=>{setData({...data,password:e.target.value})}} className='w-full px-3 py-2 border border-gray-800'  placeholder='password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p></p>
        
          <a href='/register'  className='cursor-pointer'>create an account</a>
          
        
      </div>
      <button className='bg-black px-8 py-2 mt-4 font-light text-white active:bg-gray-600'>sign-up</button>
    </form>
<Footer/>
    </div>
  )
}

export default Login
