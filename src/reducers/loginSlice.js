import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setCookie , getCookies , removeCookis } from "../util/cookieUtil";
import { postLogin } from "../api/LoginApi";


export const postLoginThunk = createAsyncThunk('postLoginThunk', (params) => {
    console.log(params)

    return postLogin(params)
});

const loadCookie = () => {
    const loginObj = getCookies("login")

    console.log("")
    console.log(loginObj)

    if(!loginObj) {
        return initState;
    }

    return loginObj;
}


const initState = {

    email:'',
    nickname:'',
    admin:false,
    // signed:false,
    loading: false,
    errorMsg: null,
    

}

const loginSlice = createSlice({
    name : 'loginSlice', 
    // 함수의 리턴값으로 받을 생각.
    initialState: loadCookie(),
    reducers:{
        requestLogin: (state , action) =>  {
        
            const payLoad = action.payload
            console.log("requestlogin: " , payLoad);

            const loginObj = {email: payLoad.email , signed: true}

            setCookie("login" , JSON.stringify(loginObj) , 1)

            return payLoad

        },

        requestLogout: (state) =>  {

            console.log("=================requestLogout=====================")

            removeCookis("login")
       
            return initState

        }
    },

    // extraReducers 설정방법 2가지.
    // 1. 키,값 설정. / 2. 빌더설정.
    extraReducers: (builder) => {
        

        //썽크들의 경우의 수를 처리 한다.
        // 이떄 쓰는게 addCase
        // 첫번째 는 썽크의 상태 , 두번째는 값의 상태와 엑션값
        builder.addCase(postLoginThunk.fulfilled , (state,action) => {
            console.log("fullfilled" , action.payload);
            const {email,nickname,roleName , errorMsg} = action.payload;

            if(errorMsg){
                state.errorMsg = errorMsg
                return
            }

            if(roleName === 'ADMIN'){
               state.errorMsg = errorMsg
               return 
            }

            // state.loading = false;
            // state.email = email
            // state.nickname = nickname
            // state.admin = admin

            state = action.payload
            // state.loading = false
            setCookie("login" , JSON.stringify(action.payload) , 1)
            
            return {...action.payload , loading:false}
            
        })
        .addCase(postLoginThunk.pending, (state,action) => {
            console.log("pending");
            state.loading = true
        })
        .addCase(postLoginThunk.rejected, (state,action) => {
            console.log("rejected");
        })
        
    }

})

export const {requestLogout , requestLogin} = loginSlice.actions

export default loginSlice.reducer