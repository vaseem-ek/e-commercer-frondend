import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import { getProductApi, removeProductApi } from '../../service/allApi'
import toast from 'react-hot-toast'

function List() {
  const [list, setList] = useState([])

  useEffect(() => {
    getProduct()
  }, [])
  const getProduct = async () => {
    const res = await getProductApi()
    console.log(res.data.product);
    setList(res.data.product)
  }

  const removeProduct = async (sid) => {
    const header = {
      'Content-type': 'application/json',
      'Authorization': `token ${sessionStorage.getItem('token')}`
    }
    const res = await removeProductApi(sid, header)
    toast.success(res.data.message);
    getProduct()

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
                <p className='mb-2'>All Product List</p>
                <div>
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">#</th>
                        <th className="py-2 px-4 border-b text-left">Name</th>
                        <th className="py-2 px-4 border-b text-left">image</th>
                        <th className="py-2 px-4 border-b text-left">Category</th>
                        <th className="py-2 px-4 border-b text-left">Price</th>
                        <th className="py-2 px-4 border-b text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((item, index) => (
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-2 px-4">{index + 1}</td>
                          <td className="py-2 px-4">{item.name}</td>
                          <td className="py-2 px-4">
                            <img className='h-10 w-10' src={item.image[0]} alt="" />
                          </td>
                          <td className="py-2 px-4">{item.category}</td>
                          <td className="py-2 px-4">$ {item.price}</td>
                          <td className="py-2 px-4 cursor-pointer hover:text-red-400" onClick={()=>removeProduct(item._id)}>X</td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>

      </div>
    </div>
  )
}

export default List
