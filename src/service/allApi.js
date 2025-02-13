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