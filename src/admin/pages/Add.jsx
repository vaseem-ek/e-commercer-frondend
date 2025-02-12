import React from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'

function Add() {
    return (
        <div>
            <div className='bg-gray-50 min-h-screen'>
                <>
                    <Navbar />
                    <hr />
                    <div className='flex w-full '>
                        <SideBar />
                        <div className='w-[70%] mx-auto ml-[max(5vw,25px)]  my-8 text-gray-600 text-base'>
                            <form className='flex flex-col w-full items-start gap-3' >
                                <div>
                                    <p className='mb-2'>Upload Image</p>
                                    <div className='flex gap-3'>
                                        <label htmlFor="image1" className='border-2 p-3 border-dashed'>
                                            <img className='w-20 cursor-pointer' src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Image.png" alt="" />
                                            <input type="file" id='image1' hidden />
                                        </label>
                                        <label htmlFor="image2" className='border-2 p-3 border-dashed'>
                                            <img className='w-20 cursor-pointer' src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Image.png" alt="" />
                                            <input type="file" id='image2' hidden />
                                        </label>
                                        <label htmlFor="image3" className='border-2 p-3 border-dashed'>
                                            <img className='w-20 cursor-pointer' src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Image.png" alt="" />
                                            <input type="file" id='image3' hidden />
                                        </label>
                                        <label htmlFor="image4" className='border-2 p-3 border-dashed'>
                                            <img className='w-20 cursor-pointer' src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Image.png" alt="" />
                                            <input type="file" id='image4' hidden />
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p>Product Name</p>
                                    <input type="text" placeholder='type here' className='w-full border-gray-100 outline rounded max-w-[500px] px-3 py-2' />
                                </div>
                                <div className='w-full'>
                                    <p>Product Description</p>
                                    <textarea type="text" placeholder='type here' className='w-full outline rounded max-w-[500px] px-3 py-2' />
                                </div>
                                <div className='flex-col flex sm:flex-row gap-2 w-full sm:gap-8'>
                                    <div>
                                        <p className='mb-2'>Product Category</p>
                                        <select className='w-full px-3 py-2 outline rounded '>
                                            <option value="Men">Men</option>
                                            <option value="Women">Women</option>
                                            <option value="Kids">Kids</option>
                                        </select>
                                    </div>

                                    <div>
                                        <p className='mb-2'>Sub Category</p>
                                        <select className='w-full px-3 py-2 outline rounded'>
                                            <option value="Topwear">Topwear</option>
                                            <option value="Bottomwear">Bottomwear</option>
                                            <option value="Winterwear">Winterwear</option>
                                        </select>
                                    </div>
                                    <div>

                                        <p className='mb-2'>Product Price</p>
                                        <input type="number" placeholder='$ 99' className='w-full md:w-[100px] outline rounded sm:w-[120-px] px-3 py-2' />
                                    </div>
                                </div>
                                <div>
                                    <p>Product sizes</p>
                                    <div className='flex gap-3'>
                                        <div> 
                                            <p className='bg-slate-200 px-3 py-2 cursor-pointer '>S</p>
                                        </div>
                                        <div> 
                                            <p className='bg-slate-200 px-3 py-2 cursor-pointer '>M</p>
                                        </div>
                                        <div> 
                                            <p className='bg-slate-200 px-3 py-2 cursor-pointer '>L</p>
                                        </div>
                                        <div> 
                                            <p className='bg-slate-200 px-3 py-2 cursor-pointer '>XL</p>
                                        </div>
                                        <div> 
                                            <p className='bg-slate-200 px-3 py-2 cursor-pointer '>XXL</p>
                                        </div>    
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-2'>
                                    <input type="checkbox" id='bestseller' />
                                    <label className='cursor-pointer' htmlFor="bestseller">Add to best seller</label>
                                </div>
                                <button type='submit' className='px-3 bg-black text-white py-2'>ADD</button>
                            </form>
                        </div>
                    </div>
                </>

            </div>
        </div>
    )
}

export default Add
