import React from 'react'
import Title from '../componenets/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../componenets/NewsletterBox'
import Footer from '../componenets/Footer'
import Navbar from '../componenets/Navbar'

function About() {
  return (
    <div>
      <Navbar/>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'about'} text2={'us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img src={assets.about_img} className='w-full md:max-w-[480px] ' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni soluta voluptatum alias repellat, incidunt fugit accusantium pariatur exercitationem veritatis nostrum laudantium excepturi at corrupti, est esse sequi, ipsam nam autem.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, temporibus obcaecati voluptatum, est non esse ipsa magnam accusantium tenetur, fuga officia. In veniam dolorum voluptate voluptatum necessitatibus ratione nesciunt nobis.</p>
        <b className='text-gray-800'>our mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem ratione iusto. Dolorum neque quis inventore quasi architecto pariatur expedita! Alias omnis iure nihil totam vero natus expedita doloremque iusto.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'why'} text2={'choose us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>quality assurance</b>
          <p className='text-gray-500 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti cumque nisi, fugit vitae autem fugiat a, voluptates commodi deserunt beatae repellat, quia impedit debitis in unde numquam distinctio nulla.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>convinience</b>
          <p className='text-gray-500 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti cumque nisi, fugit vitae autem fugiat a, voluptates commodi deserunt beatae repellat, quia impedit debitis in unde numquam distinctio nulla.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>exceptional customer service</b>
          <p className='text-gray-500 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti cumque nisi, fugit vitae autem fugiat a, voluptates commodi deserunt beatae repellat, quia impedit debitis in unde numquam distinctio nulla.</p>
        </div>
      </div>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default About
