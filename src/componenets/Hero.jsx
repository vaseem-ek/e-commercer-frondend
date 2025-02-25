import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
    return (
        <div>
            {/* <div className='flex flex-col sm:flex-row border border-gray-400'>
                <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:pt:0'>
                    <div className='text-[#414141]'>
                        <div className="flex items-center gap-2">
                            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                            <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
                        </div>
                        <h1 className='mopple text-3xl sm:py-3 lg:text-5xl leading-base'> Latest Arrival</h1>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold text-sm md:text-base'>SHOP IN</p>
                            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        </div>
                    </div>
                </div>
                <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />

            </div> */}



            <div className="relative w-full h-full">
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/036/214/523/small_2x/ai-generated-empty-supermarket-cart-on-blue-background-ready-for-shopping-generated-by-ai-free-photo.jpg"
                    className="md:w-full md:h-[400px] w-full h-1/2 rounded object-cover"
                    alt="Best Seller"
                />
                <h2 className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded">
                    OUR BEST SELLER
                    <span className='block text-orange-500'>it is your best choice</span>
                </h2>
            </div>





        </div>
    )
}

export default Hero
