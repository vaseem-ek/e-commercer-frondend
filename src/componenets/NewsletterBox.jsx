import React from 'react'

function NewsletterBox() {

    const onSubmitHandler=(event)=>{
        event.preventDEfault()
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis, </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
      <input type="email" placeholder='enter your email' required className='w-full sm:flex-1 outline-none' />
      <button type='submit' className='bg-black text-white text-xs px-10 py-4 '>subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
