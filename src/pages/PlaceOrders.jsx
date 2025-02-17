import React, { useContext, useState } from 'react'
import Title from '../componenets/Title'
import CartTotal from '../componenets/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import { placeOrderApi, userStripeApi } from '../service/allApi'
import toast from 'react-hot-toast'

function PlaceOrders() {
  const { navigate, cartItem, setCartItem, getCartAmount, deliver_fee, products } = useContext(ShopContext)
  const [method, setMethod] = useState('cod')
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  const onchangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData(data => ({ ...data, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let orderItems = []
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id == items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItem[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliver_fee
      }

      console.log(orderData);


      switch (method) {
        case 'cod':
          const header = {
            'Content-type': 'application/json',
            'Authorization': `token ${sessionStorage.getItem('token')}`
          }
          const res = await placeOrderApi(orderData, header)
          if (res.data.success) {
            setCartItem({})
            navigate('/orders')
          } else {
            toast.error(res.data.message)
          }
          break;
        case 'stripe':
          const headers = {
            'Content-type': 'application/json',
            'Authorization': `token ${sessionStorage.getItem('token')}`
          }
          const resp = await userStripeApi(orderData, headers)
          console.log(resp);
          if (resp.data.success) {
            const { session_url } = resp.data._id
            window.location.replace(session_url)
          } else {
            toast.error(res.data.message)

          }

          break;
        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-top'>
        {/*--------------- left side --------------*/}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'delivery'} text2={'information'} />
          </div>
          <div className='flex gap-3'>
            <input onChange={onchangeHandler} name='firstName' value={formData.firstName} type="text" placeholder='first name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
            <input onChange={onchangeHandler} name='lastName' value={formData.lastName} type="text" placeholder='last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          </div>
          <input onChange={onchangeHandler} name='email' value={formData.email} type="email" placeholder='email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input onChange={onchangeHandler} name='street' value={formData.street} type="text" placeholder='street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <div className='flex gap-3'>
            <input onChange={onchangeHandler} name='city' value={formData.city} type="text" placeholder='city' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
            <input onChange={onchangeHandler} name='state' value={formData.state} type="text" placeholder='state' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          </div>
          <div className='flex gap-3'>
            <input onChange={onchangeHandler} name='zipcode' value={formData.zipcode} type="number" placeholder='zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
            <input onChange={onchangeHandler} name='country' value={formData.country} type="text" placeholder='country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          </div>
          <input onChange={onchangeHandler} name='phone' value={formData.phone} type="number" placeholder='phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

        </div>
        {/* ----------------right side---------------- */}
        <div className='mt-6'>
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>
          <div className='mt-12'>
            <Title text1={'payment'} text2={'method'} />
            {/*------------ text payment selector-------------- */}
            <div className='flex gap-3 flex-col lg:flex-row'>
              <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-600' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
              </div>
              <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-600' : ''} `}></p>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
              </div>
              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'cod' ? 'bg-green-600' : ''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4 '>cash on delivery</p>
              </div>
            </div>
            <div className='w-full text-end mt-8'>
              <button type='submit' className='bg-black text-white px-16 py-3 text-sm active:bg-gray-600'>placeorder</button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default PlaceOrders
