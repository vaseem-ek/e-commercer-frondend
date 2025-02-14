import { createContext, useEffect, useState } from "react";
 import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addToCartApi, getCartApi, getProductApi, updateCartApi } from "../service/allApi";
import axios from "axios";
import { Base_Url } from "../service/Base_url";


export const ShopContext=createContext()

const ShopContextProvider=({children})=>{
    const currency='$'
    const deliver_fee=10
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)
    const [cartItem,setCartItem]=useState({})
    const navigate=useNavigate()
    const [products,setProducts]=useState([])
    const [token,setToken]=useState('')

    useEffect(()=>{
        getProduct()
    },[])
   useEffect(()=>{
    if(sessionStorage.getItem('token')){
        setToken(sessionStorage.getItem('token'))
        getUserCart()
    }
   },[])


    const getProduct = async () => {
        const res = await getProductApi()
        setProducts(res.data.product)
      }

    const addToCart =async(itemId,size)=>{

        if(!size){
            toast.error('selsect product size')
            return
        }

        let cartData=structuredClone(cartItem)
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+= 1
            }else{
                cartData[itemId][size]=1
            }
        }else{
            cartData[itemId]={}
            cartData[itemId][size]=1
        }
        setCartItem(cartData)
        if(token){
            try {
                const header={
                    'Content-type':'application/json',
                    'Authorization':`token ${sessionStorage.getItem('token')}`
                }
               await addToCartApi({itemId,size},header)               
            } catch (error) {
                console.log(error);
                
            }
        }
    }
   
    const getCartCount=()=>{
        let totalCount=0
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item]>0){
                        totalCount+= cartItem[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount
    }

    //here just updating values but if value =0 the item is removed and values is 1 or more item is updated
    const updateQuantity=async(itemId,size,quantity)=>{
        let cartData=structuredClone(cartItem)
        cartData[itemId][size]=quantity        
        setCartItem(cartData)
        if(token){
            try {
                const header={
                    'Content-type':'application/json',
                    'Authorization':`token ${sessionStorage.getItem('token')}`
                }
                await updateCartApi({itemId,size,quantity},header)
               
            } catch (error) {
                console.log(error);
                
            }
        }
    }
 

    const getUserCart=async()=>{
        const header={
            'Content-type':'application/json',
            'Authorization':`token ${sessionStorage.getItem('token')}`
        }
        const res=await getCartApi(header)
        setCartItem(res.data.cartData)
        
    }
    const getCartAmount=()=>{
        let totalAmount=0
        for(const items in cartItem){
            let itemInfo=products.find((product)=>product._id===items)
            for(const item in cartItem[items]){
                if(cartItem[items][item]){
                    totalAmount+= itemInfo.price* cartItem[items][item]
                }
            }
        }
        return totalAmount
    }
   

    const value={
        products,
        currency,
        deliver_fee,
        search,setSearch,
        showSearch,setShowSearch,
        cartItem,addToCart,getCartCount,
        updateQuantity,getCartAmount,navigate
    }
    return(
        <>
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
        </>
    )
}
 export default ShopContextProvider