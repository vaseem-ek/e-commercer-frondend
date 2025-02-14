import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../componenets/Title'
import { assets } from '../assets/assets'
import CartTotal from '../componenets/CartTotal'
import Footer from '../componenets/Footer'
import Navbar from '../componenets/Navbar'

function Cart() {
  const { products, currency, cartItem, updateQuantity, navigate } = useContext(ShopContext)
  const [cartdata, setCartData] = useState([])

  useEffect(() => {
    const tembData = []
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tembData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
    }

    setCartData(tembData)    
  }, [cartItem,products])

  return (
    <div>
      <Navbar />
      <div className='border-t pt-14'>
        <div className='text-2xl mb-3 '>
          <Title text1={'your'} text2={'cart'} />
        </div>
        <div>
          {cartdata.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                  <div>
                    <p className='text-xs sm:text-xl font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' defaultValue={item.quantity} />
                <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
              </div>
            )
          })}
        </div>
        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='flex justify-end my-20'>
              <button onClick={() => navigate('/place-order')} className='bg-black p-4 text-white text-sm'> proceed to check out</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
