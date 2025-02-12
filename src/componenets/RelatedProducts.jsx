import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import PorductItem from './PorductItem'

function RelatedProducts({ category, subCategory, id }) {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice()
      productsCopy = productsCopy.filter(item => category === item.category)
      productsCopy = productsCopy.filter(item => subCategory === item.subCategory)
      const productsCop = productsCopy.filter(item => id !== item._id)
      setRelated(productsCop.slice(0, 5));

    }
  }, [products, id])
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'related'} text2={'products'} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          related.map((item, index) => (
            <PorductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}
export default RelatedProducts
