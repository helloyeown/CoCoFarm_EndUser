import {Cookies} from "react-cookie";

const cookies = new Cookies()

export const setCookie = ( cookieName , value , days ) => {

    const expires = new Date()
    expires.setUTCDate(expires.getUTCDate + days);


    // console.log({path: "/" , expires:expires})

    cookies.set(cookieName , value , {path: "/" , expires:expires})

}

export const getCookies = (cookieName) => {
    return cookies.get(cookieName)
}

export const removeCookis = (cookieName , path="/") => {
    cookies.remove(cookieName , {path: path})
    
}

const initState = {

    email:'',
    nickname:'',
    admin:false,
    // signed:false,
    loading: false,
    errorMsg: null,
    

}

export const loadCookie = () => {
    const loginObj = getCookies("login")

    console.log("")
    console.log(loginObj)

    if(!loginObj){
        return initState;
    }

    return loginObj;
}


