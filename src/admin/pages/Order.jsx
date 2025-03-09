import React, { useEffect, useState } from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'
import { allOrdersUserApi, deleteOrder, statusApi } from '../../service/allApi'
import toast from 'react-hot-toast'

function Order() {
  const [allOrders, setAllOrders] = useState([])
  useEffect(() => {
    getAllOrders()
  }, [])

  const getAllOrders = async () => {
    const header = {
      'Content-type': 'Application/json',
      'Authorization': `token ${sessionStorage.getItem('token')}`
    }
    const res = await allOrdersUserApi(header)
    console.log(res.data.allOrder);
    if (res.data.success) {
      setAllOrders(res.data.allOrder)
    } else {
      toast.error(res.data.message)
    }

  }

  const handleStatus=async(event,orderId)=>{
    const data={
      status:event,orderId
    }
    
    const header={
      'Content-type': 'application/json',
      'Authorization': `token ${sessionStorage.getItem('token')}`
    }

    const res=await statusApi(data,header)
    console.log(res);
    getAllOrders()
    
  }

  const deleteOrderId=async(id)=>{
    const header={
      'Content-type': 'application/json',
      'Authorization': `token ${sessionStorage.getItem('token')}`
    }

    const res=await deleteOrder(id,header)
    console.log(res);
    getAllOrders()
    
  }

  
  return (
    <div>
      <div className='bg-gray-50 min-h-screen'>
        <>
          <Navbar />
          <hr />
          <div className='flex w-full'>
            <SideBar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <div>
                <h3>Order page</h3>
                <div>
                  {
                    allOrders.length > 0 ?
                      allOrders.map((order, index) => (
                        <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-300 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 ' key={index}>
                          <img src="https://img.freepik.com/free-vector/3d-delivery-box-parcel_78370-825.jpg" className='h-20 w-20 border' alt="" />
                          <div>
                            <div>
                              {
                                order.items.map((item, index) => {
                                  if (index == order.items.length - 1) {
                                    return (

                                      <p className='py-0.5' key={index}>{item.name} X {item.quantity} <span>{item.size}</span> </p>
                                    )

                                  } else {
                                    return (
                                      <p className='py-0.5' key={index}>{item.name} X {item.quantity} <span>{item.size}</span> </p>

                                    )
                                  }
                                })
                              }
                            </div>
                            <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
                            <div>
                              <p>{order.address.street + " ,"}</p>
                              <p>{order.address.city + " ," + order.address.state + "," + order.address.zipcode}</p>
                            </div>
                            <p>{order.address.phone}</p>
                          </div>
                          <div>
                            <p className='text-sm sm:text-[15px]'>Items : {order.items.length} </p>
                            <p className='mt-3'>Method: {order.paymentMethod}</p>
                            <p>Payment : {order.payment ? "Done" : "Pending"}</p>
                            <p>date :{new Date(order.date).toLocaleDateString()}</p>
                          </div>
                          
                            <p className='text-sm sm:text-[15px]'>$ {order.amount}</p>
                            <select onChange={(event)=>handleStatus(event.target.value,order._id)} value={order.status} className='p-2 font-semibold border'>
                              <option value="Ordered Placed">Ordered Placed</option>
                              <option value="Paking">packing</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Out for Delivery">Out for Delivery</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                          <button className='border px-3 py-2 bg-black text-white' onClick={()=>deleteOrderId(order._id)}>Cancel</button>
                        </div>
                      ))
                      : "no"
                  }
                </div>
              </div>
            </div>
          </div>
        </>

      </div>
    </div>
  )
}

export default Order
