import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

function SearchBar() {

  const { showSearch, setShowSearch, search, setSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true)
    } else {
      setVisible(false)
    }

  }, [location])

  return showSearch && visible ? (
    <div className=' border-b my-5 text-center flex justify-end'>
      <div className='inline-flex items-center justify-center border  px-5 py-2 my-5  mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search here' className='flex-1 outline-none bg-inherit text-sm' />
        <img src={assets.search_icon} className='w-4' alt="" />

      </div>
    </div>
  ) :
    null
}

export default SearchBar
