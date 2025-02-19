import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

function SideBar() {
  return (
    <div className='w-[18%] min-h-screen  border-r-2'>
        <div className=' flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink className='flex pp items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ' to={'/admin/dash'}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3I10OL6FXfHXkz6wS_UOl3-eFEZE43LFtaQ&s" className='w-5 h-5' alt="" />
            <p className='hidden md:block'>Dashboard</p>
            </NavLink>
            <NavLink className='flex pp items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ' to={'/admin/add'}>
            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/add.png" className='w-5 h-5' alt="" />
            <p className='hidden md:block'>Add items</p>
            </NavLink>
            <NavLink className='flex  pp items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ' to={'/admin/list'}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXbGbG1RfYQCqNpsjasNBUdpMge_uth2J5Q&s" className='w-5 h-5' alt="" />
            <p className='hidden md:block'>list items</p>
            </NavLink>
            <NavLink className='flex pp items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ' to={'/admin/order'}>
            <img src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-sales-order.png" className='w-5 h-5' alt="" />
            <p className='hidden md:block'>order items</p>
            </NavLink>
            <NavLink className='flex pp items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ' to={'/admin/all-users'}>
            <img src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-sales-order.png" className='w-5 h-5' alt="" />
            <p className='hidden md:block'>All Users</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default SideBar
