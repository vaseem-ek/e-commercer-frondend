import { Base_Url } from "./Base_url";
import commonApi from "./commenApi";


export const registerUserApi=async(data)=>{
    return await commonApi(`${Base_Url}/register`,'POST',"",data)
}
export const loginUser=async(data)=>{
    return await commonApi(`${Base_Url}/login`,'POST',"",data)
}