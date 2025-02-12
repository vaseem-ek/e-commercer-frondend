import React from 'react'
import Hero from '../componenets/Hero'
import LatestCollection from '../componenets/LatestCollection'
import BestSeller from '../componenets/BestSeller'
import OurPolicy from '../componenets/OurPolicy'
import NewsletterBox from '../componenets/NewsletterBox'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default Home
