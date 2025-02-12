import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
function Navbar() {
    const [visible,setVisible]=useState(false)
    const {setShowSearch,getCartCount}=useContext(ShopContext)
    return (
        <>
            <div className="flex items-center justify-between py-5 font-medium">
               <Link to={'/'}> <img src={assets.logo} className='w-36' alt="" /></Link>
                <ul className='hidden sm:flex gap-5 text-sm text-gray-600'>
                    <NavLink to={'/'} className='flex flex-col items-center gap-1'>
                        <p>HOME</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-red-600 hidden' />
                    </NavLink>
                    <NavLink to={'/collection'} className='flex flex-col items-center gap-1'>
                        <p>COLLECTION</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-red-600 hidden' />
                    </NavLink>
                    <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
                        <p>ABOUT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-red-600 hidden' />
                    </NavLink>
                    <NavLink to={'/contact'} className='flex flex-col items-center gap-1'>
                        <p>CONTACT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-red-600 hidden' />
                    </NavLink>

                </ul>
                <div className='flex items-center gap-6'>
                    <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                    <div className="group relative">
                       <Link to={'/login'}> <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className="flex flex-col bg-slate-100 gap-2 w-36 py-4 px-5 text-gray-500 rounded">
                                <p className='cursor-pointer hover:text-black'>My profile</p>
                                <p className='cursor-pointer hover:text-black'>Orders</p>
                                <p  className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>
                    </div>
                    <Link to={'/cart'} className='relative'>
                    <img src={assets.cart_icon} alt="" className='w-5 min-w-5' />
                    <p className='absolute right-[-5px] bottom-[-5px] bg-red-600 rounded-full text-[8px] w-4 text-center leading-4 text-white aspect-square'>{getCartCount()}</p>
                    </Link>
                    <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 sm:hidden cursor-pointer' alt="" />
                </div>
                <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
                    <div className='flex flex-col text-gray-600'>
                        <div onClick={()=>setVisible(false)} className='flex p-3 items-center gap-4 cursor-pointer'>
                            <img src={assets.dropdown_icon} className='rotate-180 w-[10px]' alt="" />
                            <p>Back</p>
                        </div>
                        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-5 border text-center' to={'/'}>
                            HOME
                        </NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-5 border text-center' to={'/collection'}>
                            COLLECTION
                        </NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-5 border text-center' to={'/about'}>
                            ABOUT
                        </NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-5 border text-center' to={'/contact'}>
                            CONTACT
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
