import axios from "axios";
import { getCookis, setCookie } from "./cookieUtil";
import { Cookies } from "react-cookie";

const jwtAxios = axios.create();

const beforeReq = (config) => {


    console.log("beforeRequest....................................")

    const { accessToken } = getCookis("login")

    if(!accessToken){
        throw new Error("NO ACCESS TOKEN");
    }

    // let header = {
    //     headers: {
    //         "Authorization": `Bearer ${accessToken}`,
    //         // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",

    //     }
    // }

    config.headers.Authorization = `Bearer ${accessToken}`


    return config
}

const requestFail = (err) => {


    console.log("requestFail....................................")

    return Promise.reject(err)
}


const beforeRes = async(res) => {
    console.log("2xx Response.......................")

    if(res.data.error == 'Expired'){
        console.log('Access Token has expired');
        
        const newAccessToken = await refreshJWT()

        //재호출
        const originalRequest = res.config

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

        return await axios(originalRequest)


    }

    return res;
}

const refreshJWT = async () => {

    const cookieValue = getCookis("login");

    const {accessToken ,refreshToken} = cookieValue

    let header = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    const res = await axios.get(`http://localhost:8080/api/member/refresh?refreshToken=${refreshToken}` , header);

    const newAccess = res.data.accessToken
    const newRefresh = res.data.refreshToken

    console.log("newAccess :" , newAccess);
    console.log("newRefresh :" , newRefresh);

    console.log("res.data :" , res.data);
                
    cookieValue.accessToken = res.data.accessToken
    cookieValue.refreshToken = res.data.refreshToken

    setCookie("login" , JSON.stringify(cookieValue) , 1)

    return newAccess
}


const responseFail = (err) => {
    console.log("response Fail.......................")
    return Promise.reject(err)
}


jwtAxios.interceptors.request.use(beforeReq , requestFail)
jwtAxios.interceptors.response.use(beforeRes , responseFail)

export default jwtAxios