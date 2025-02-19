import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import { allUsersApi } from '../../service/allApi'

function AllUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const header = {
            'Content-type': 'application/json',
            'Authorization': `token ${sessionStorage.getItem('token')}`
        }
        const res = await allUsersApi(header)
        console.log(res.data);
        setUsers(res.data.allUsers);


    }

    return (
        <div>
            <div className='bg-gray-50 min-h-screen'>

                <Navbar />
                <hr />
                <div className='flex w-full'>
                    <SideBar />
                    <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                        <div>
                            <h3>All Users page</h3>
                        </div>
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border-b text-left">#</th>
                                    <th className="py-2 px-4 border-b text-left">Name</th>
                                    <th className="py-2 px-4 border-b text-left">Email</th>
                                    <th className="py-2 px-4 border-b text-left">Role</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item, index) => (

                                        <tr>
                                            <td className="py-2 px-4">{index+1}</td>
                                            <td className="py-2 px-4">{item.name}</td>
                                            <td className="py-2 px-4">{item.email}</td>
                                            <td className="py-2 px-4">{item.role}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUsers
