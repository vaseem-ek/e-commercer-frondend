import React from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'

function Order() {
  return (
    <div>
       <div className='bg-gray-50 min-h-screen'>
      <>
        <Navbar />
        <hr />
        <div className='flex w-full'>
          <SideBar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>

</div>
        </div>
      </>

    </div>
    </div>
  )
}

export default Order
