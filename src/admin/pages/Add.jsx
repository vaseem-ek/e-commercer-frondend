import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import { addProductApi } from '../../service/allApi'
import toast from 'react-hot-toast'

function Add() {
    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Men")
    const [subCategory, setSubCategory] = useState("Topwear")
    const [bestSeller, setBestSeller] = useState(false)
    const [sizes, setSizes] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const fd = new FormData()
            fd.append('name', name)
            fd.append('description', description)
            fd.append('price', price)
            fd.append('category', category)
            fd.append('subCategory', subCategory)
            fd.append('bestSeller', bestSeller)
            fd.append('sizes', JSON.stringify(sizes))

            image1 && fd.append('image1', image1)
            image2 && fd.append('image2', image2)
            image3 && fd.append('image3', image3)
            image4 && fd.append('image4', image4)

            const header = {
                'Content-type': 'multipart/formdata',
                'Authorization': `token ${sessionStorage.getItem('token')}`
            }
            const res = await addProductApi(fd, header)
            console.log(res);
            if(res.data.success){
                toast.success(res.data.message)
                setName("")
                setDescription("")
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice("")

            }else{
                toast.error(res.data.message)
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }

    return (
        <div>
            <div className='bg-gray-50 min-h-screen'>
                <>
                    <Navbar />
                    <hr />
                    <div className='flex w-full '>
                        <SideBar />
                        <div className='w-[70%] mx-auto ml-[max(5vw,25px)]  my-8 text-gray-600 text-base'>
                            <form onSubmit={handleSubmit} className='flex flex-col w-full items-start gap-3' >
                                <div>
                                    <p className='mb-2'>Upload Image</p>
                                    <div className='flex gap-3'>
                                        <label htmlFor="image1" className='border-2 p-3 border-dashed'>
                                            <img className='w-20 h-20 cursor-pointer' src={`${!image1 ? "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Image.png" : URL.createObjectURL(image1)}`} alt="" />
                                            < input onChange={(e) => { setImage1(e.target.files[0]) }} type="file" id='image1' hidden />
                                        </label>
                                        <label htmlFor="image2" className='border-2 p-3 border-dashed'>
                                            <img className='w-20 h-20 cursor-pointer' src={`${!image2 ? "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Image.png" : URL.createObjectURL(image2)}`} alt="" />
                                            < input onChange={(e) => { setImage2(e.target.files[0]) }} type="file" id='image2' hidden />
                                        </label>
                                        <label htmlFor="image3" className='border-2 p-3 border-dashed'>
                                            <img className='w-20 h-20 cursor-pointer' src={`${!image3 ? "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Image.png" : URL.createObjectURL(image3)}`} alt="" />
                                            < input onChange={(e) => { setImage3(e.target.files[0]) }} type="file" id='image3' hidden />
                                        </label>
                                        <label htmlFor="image4" className='border-2 p-3 border-dashed'>
                                            <img className='w-20 h-20 cursor-pointer' src={`${!image4 ? "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Image.png" : URL.createObjectURL(image4)}`} alt="" />
                                            < input onChange={(e) => { setImage4(e.target.files[0]) }} type="file" id='image4' hidden />
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p>Product Name</p>
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='type here' className='w-full border-gray-100 outline rounded max-w-[500px] px-3 py-2' />
                                </div>
                                <div className='w-full'>
                                    <p>Product Description</p>
                                    <textarea type="text" onChange={(e) => setDescription(e.target.value)} value={description} placeholder='type here' className='w-full outline rounded max-w-[500px] px-3 py-2' />
                                </div>
                                <div className='flex-col flex sm:flex-row gap-2 w-full sm:gap-8'>
                                    <div>
                                        <p className='mb-2'>Product Category</p>
                                        <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2 outline rounded '>
                                            <option value="Men">Men</option>
                                            <option value="Women">Women</option>
                                            <option value="Kids">Kids</option>
                                        </select>
                                    </div>

                                    <div>
                                        <p className='mb-2'>Sub Category</p>
                                        <select onChange={(e) => { setSubCategory(e.target.value) }} value={subCategory} className='w-full px-3 py-2 outline rounded'>
                                            <option value="Topwear">Topwear</option>
                                            <option value="Bottomwear">Bottomwear</option>
                                            <option value="Winterwear">Winterwear</option>
                                        </select>
                                    </div>
                                    <div>

                                        <p className='mb-2'>Product Price</p>
                                        <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='$ 99' className='w-full md:w-[100px] outline rounded sm:w-[120-px] px-3 py-2' />
                                    </div>
                                </div>
                                <div>
                                    <p>Product sizes</p>
                                    <div className='flex gap-3'>
                                        <div onClick={() => setSizes(prev => prev.includes('S') ? prev.filter(item => item !== 'S') : [...prev, 'S'])}>
                                            <p className={`${sizes.includes('S') ? "bg-orange-200" : "bg-slate-200 "} px-3 py-2 cursor-pointer `}>S</p>
                                        </div>
                                        <div onClick={() => setSizes(prev => prev.includes('M') ? prev.filter(item => item !== 'M') : [...prev, 'M'])}>
                                            <p className={`${sizes.includes('M') ? "bg-orange-200" : "bg-slate-200 "} px-3 py-2 cursor-pointer `}>M</p>
                                        </div>
                                        <div onClick={() => setSizes(prev => prev.includes('L') ? prev.filter(item => item !== 'L') : [...prev, 'L'])}>
                                            <p className={`${sizes.includes('L') ? "bg-orange-200" : "bg-slate-200 "} px-3 py-2 cursor-pointer `}>L</p>
                                        </div>
                                        <div onClick={() => setSizes(prev => prev.includes('XL') ? prev.filter(item => item !== 'XL') : [...prev, 'XL'])}>
                                            <p className={`${sizes.includes('XL') ? "bg-orange-200" : "bg-slate-200 "} px-3 py-2 cursor-pointer `}>XL</p>
                                        </div>
                                        <div onClick={() => setSizes(prev => prev.includes('XXL') ? prev.filter(item => item !== 'XXL') : [...prev, 'XXL'])}>
                                            <p className={`${sizes.includes('XXL') ? "bg-orange-200" : "bg-slate-200 "} px-3 py-2 cursor-pointer `}>XXL</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-2'>
                                    <input type="checkbox" onChange={() => setBestSeller(prev => !prev)} checked={bestSeller} id='bestseller' />
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
