import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrders from './pages/PlaceOrders'
import Orders from './pages/Orders'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import SearchBar from './componenets/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast';
import Dashboard from './admin/pages/Dashboard'
import Add from './admin/pages/Add'
import List from './admin/pages/List'
import Order from './admin/pages/Order'
import Verify from './pages/Verify'
import AllUsers from './admin/pages/AllUsers'
import Heros from './admin/pages/Heros'




function App() {
  return (
    <>
    <Toaster/>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* <SearchBar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/collection' element={<Collection/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/Product/:productId' element={<Product/>}/> 
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/> 
        <Route path='/place-order' element={<PlaceOrders/>}/> 
        <Route path='/orders' element={<Orders/>}/> 
        <Route path='/verify' element={<Verify/>}/> 

      </Routes>

    </div>
    <Routes>
      <Route path='/admin/dash' element={<Dashboard/>}/>
      <Route path='/admin/add' element={<Add/>}/>
      <Route path='/admin/list' element={<List/>}/>
      <Route path='/admin/order' element={<Order/>}/>
      <Route path='/admin/all-users' element={<AllUsers/>}/>
      <Route path='/admin/heros' element={<Heros/>}/>
    </Routes>
    <ToastContainer/>
    
    </>
  )
}

export default App
