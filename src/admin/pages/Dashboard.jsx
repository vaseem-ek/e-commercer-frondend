import React from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'

function Dashboard() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
        <Navbar />
        <hr />
        <div className='flex w-full fixed '>
          <SideBar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>

          </div>
        </div>
      </>

    </div>
  )
}

export default Dashboard
