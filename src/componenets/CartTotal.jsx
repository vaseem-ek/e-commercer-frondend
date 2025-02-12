import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
    const {currency,getCartAmount,deliver_fee}=useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'cart'} text2={'total'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>subtotal</p>
            <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>shipping fee</p>
            <p>{currency} {deliver_fee}.00</p>
        </div>
        <div className='flex justify-between'>
            <b>total</b>
            <b>{currency}{getCartAmount()===0 ?0 :getCartAmount() +deliver_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
