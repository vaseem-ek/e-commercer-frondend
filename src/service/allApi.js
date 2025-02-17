import { Base_Url } from "./Base_url";
import commonApi from "./commenApi";


export const registerUserApi=async(data)=>{
    return await commonApi(`${Base_Url}/register`,'POST',"",data)
}
export const loginUser=async(data)=>{
    return await commonApi(`${Base_Url}/login`,'POST',"",data)
}

//admin
export const addProductApi=async(data,header)=>{
    return await commonApi(`${Base_Url}/add-product`,'POST',header,data)
}
export const getProductApi=async()=>{
    return await commonApi(`${Base_Url}/list-product`,'GET',"","")
}
export const removeProductApi=async(id,header)=>{
    return await commonApi(`${Base_Url}/remove-product/${id}`,'DELETE',header,{})
}
export const allOrdersUserApi=async(header)=>{
    return await commonApi(`${Base_Url}/list`,'GET',header,"")
}
export const statusApi=async(data,header)=>{
    return await commonApi(`${Base_Url}/status`,'POST',header,data)
}

// users
export const addToCartApi=async(data,header)=>{
    return await commonApi(`${Base_Url}/add-cart`,'POST',header,data)

}
export const updateCartApi=async(data,header)=>{
    return await commonApi(`${Base_Url}/update-cart`,'POST',header,data)
}
export const getCartApi=async(header)=>{
    return await commonApi(`${Base_Url}/get-cart`,'GET',header,"")
}
export const placeOrderApi=async(data,header)=>{
    return await commonApi(`${Base_Url}/place`,'POST',header,data)
}
export const userOrders=async(header)=>{
    return await commonApi(`${Base_Url}/userorders`,'GET',header,"")
}

export const userStripeApi=async(data,header)=>{
    return await commonApi(`${Base_Url}/stripe`,'POST',header,data)
}