import React from 'react'
import Title from '../componenets/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../componenets/NewsletterBox'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'


function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='text-center text-3xl pt-10 border-t'>
        <Title text1={'contact'} text2={'us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>our store</p>
          <p className='text-gray-500'>234654 william station <br/>suit 350,washington,usa</p>
          <p className='text-gray-500'>tel:741852968 <br />email:as@gmail.com</p>
          <p className='font-semibold text-xl text-gray-500'> career at forever</p>
          <p className='text-gray-500'>lear more about our team and job opening</p>
          <button className='border border-black text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>explore jobs</button>

        </div>
      </div>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default Contact
