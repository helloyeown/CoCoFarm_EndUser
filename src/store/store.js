import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducers/loginSlice";
import cartSlice from "../reducers/consumer/cartSlice";



//이함수의 결과물이 store다
export default configureStore({
    reducer : {  
        login:loginSlice,
        cart:cartSlice
    }
})
