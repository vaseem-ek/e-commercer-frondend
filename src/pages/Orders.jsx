import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../componenets/Title'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import { userOrders } from '../service/allApi'

function Orders() {
  const { currency } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    loadOrderdata()
  }, [sessionStorage.getItem('token')])

  const loadOrderdata = async () => {
    const header = {
      'Content-type': 'application/json',
      'Authorization': `token ${sessionStorage.getItem('token')}`
    }
    const res = await userOrders(header)
    console.log(res.data);
    if (res.data.success) {
      let AllOrderItem = []
      res.data.allOrders.map(order => {
        order.items.map(item => {
          item['status'] = order.status
          item['paymen'] = order.payment
          item['paymenMethod'] = order.paymentMethod
          item['date'] = order.date
          AllOrderItem.push(item)
        })
      })
      setOrderData(AllOrderItem);

    }
  }
  return (
    <div>
      <Navbar />
      <div className='border-t pt-16'>
        <div className='text-2xl'>
          <Title text1={'my'} text2={'orders'} />
        </div>
        <div>
          {
            orderData.map((item, index) => (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div className='flex items-center gap-6 text-sm '>
                  <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-600'>
                      <p className='text-lg'>{currency} {item.price}</p>
                      <p>quantity : {item.quantity}</p>
                      <p>size : {item.size}</p>
                    </div>
                    <p>date : <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                    <p>payment : <span className='text-gray-600'>{item?.paymentMethod}</span></p>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between '>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm md:text-base'>{item.status}</p>
                  </div>
                  {/* <button onClick={loadOrderdata} className='border px-4 py-2 text-sm font-medium rounded-sm'>track order</button> */}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Orders
