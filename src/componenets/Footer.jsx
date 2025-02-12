import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate et excepturi autem quam voluptatibus fugiat dolore beatae, eaque asperiores reiciendis nobis minus eum ullam explicabo quo sed amet harum!</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>home</li>
                <li>about us</li>
                <li>delivery</li>
                <li>privacypolicy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>get in touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 7518524212</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center ' >copyright 2024@ forever.com - All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
