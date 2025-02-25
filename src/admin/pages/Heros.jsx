import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import { addHeroApi } from '../../service/allApi'

function Heros() {
    const [hero,setHero]=useState({
        heroName:"",caption:""
    })
    const [picture,setPicture]=useState(false)

    

    const handleAdd=async(e)=>{
        e.preventDefault()
        console.log(hero,picture);
        const {heroName,caption}=hero

        const fd =new FormData()
        fd.append('picture',picture)
        fd.append('heroName',heroName)
        fd.append('caption',caption)

        const header = {
            'Content-type': 'multipart/formdata',
            'Authorization': `token ${sessionStorage.getItem('token')}`
        }

        const res=await addHeroApi(fd,header)
        console.log(res);
        

        
    }
    return (
        <div className='bg-gray-50 min-h-screen'>
            <>
                <Navbar />
                <hr />
                <div className='flex w-full fixed '>
                    <SideBar />
                    <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                        <form onSubmit={handleAdd} className='border shadow-sm rounded w-3/4 p-3'>
                            <label htmlFor="picture" className=' '>
                                add Hero Image
                                <img className='w-60 h-32 cursor-pointer border border-dashed p-2' src={`${!picture ? "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Image.png" : URL.createObjectURL(picture)}`} alt="" />
                                < input type="file"onChange={(e)=>{setPicture(e.target.files[0])}} id='picture' hidden />
                            </label>
                            <div className='mb-2'>
                                <input type="text" onChange={(e)=>{setHero({...hero,heroName:e.target.value})}} placeholder='enter hero name' className='w-1/2 px-3 outline-dotted rounded py-2 ' />
                            </div>
                            <div className='mb-2'>
                                <input type="text" onChange={(e)=>{setHero({...hero,caption:e.target.value})}} placeholder='enter hero caption' className='w-1/2 rounded outline-dotted px-3 py-2 ' />
                            </div>
                            <div>
                                <button type='submit' className='bg-black text-white px-3 py-2 rounded'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>

        </div>
    )
}

export default Heros
