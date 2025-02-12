import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext=createContext()

const ShopContextProvider=({children})=>{
    const currency='$'
    const deliver_fee=10
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)
    const [cartItem,setCartItem]=useState({})
    const navigate=useNavigate()

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
    const updateQuantity=async(productId,size,quantity)=>{
        let cartData=structuredClone(cartItem)
        cartData[productId][size]=quantity
        setCartItem(cartData)
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