import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../componenets/Title'
import PorductItem from '../componenets/PorductItem'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'

function Collection() {
  const { products,search,showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubcategory] = useState([])
  const [sortType,setSortType]=useState('relevent')


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubcategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubcategory(prev => [...prev, e.target.value])
    }
  }


  const applyFilter=()=>{
    let productsCopy=products.slice()

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length >0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }
  
  const sortProduct=()=>{
    let fpCopy=filterProducts.slice()

    switch(sortType){
      case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>a.price-b.price))
      break

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
        break
      
        default :
        applyFilter()
        break

    }
  }
  
  
  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch,products])
  useEffect(()=>{
    sortProduct()
  },[sortType])
  


  return (
    <div>
      <Navbar/>
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>filter
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-semibold'>category</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} />men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} />women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} />kids
            </p>
          </div>
        </div>
        {/* sub category filter */}
        <div className={`border border-gray-400 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-semibold'>type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} />topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} />bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} />winterwear
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'colloections'} />
          {/* product sort */}
          <select onChange={(e)=>{setSortType(e.target.value)}} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevent"> sort by:relevent</option>
            <option value="low-high"> sort by:low to high</option>
            <option value="high-low"> sort by:high to low</option>
          </select>
        </div>
        {/* map products */}
        <div className='grid gri-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <PorductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Collection
