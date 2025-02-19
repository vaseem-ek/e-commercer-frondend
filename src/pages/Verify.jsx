import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { verifyStripeApi } from '../service/allApi'

function Verify() {
    const {navigate,setCartItem}=useContext(ShopContext)
    const [searchParams,setSearchParams]=useSearchParams()
    const success=searchParams.get('success')
    const orderId=searchParams.get('orderId')

    const verifyPayment=async()=>{
        const header = {
            'Content-type': 'application/json',
            'Authorization': `token ${sessionStorage.getItem('token')}`
          }
          const data={
            success:success,
            orderId:orderId,
          }
        const res=await verifyStripeApi(data,header)
        console.log(res);
        if(res.data.success){
            setCartItem({})
            navigate('/orders')
        }else{
            navigate('/cart')
        }
        
    }
    useEffect(()=>{
        verifyPayment()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Verify
