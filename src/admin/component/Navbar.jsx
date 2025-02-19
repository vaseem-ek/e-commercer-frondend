import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Navbar() {
  const nav=useNavigate()


  const logOut=()=>{
    sessionStorage.clear()
    toast.success("admin logout success")
    nav('/')

  }
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <h1 className='text-red-400 font-bold italic text-2xl'>Shopee</h1>
      <button onClick={logOut} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
