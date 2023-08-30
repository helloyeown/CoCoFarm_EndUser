import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";


const initState = {
    email: '',
    pw:''
}


const LoginComponent = () => {

    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInfo] = useState({...initState})

    const dispatch = useDispatch()

    const errorMsg = loginState.errorMsg

    console.log("ERRORMSG: " + errorMsg)

    return ( 

        <div className="border-2 rounded-md ml-auto mr-auto mt-14 w-[600px] h-[450px]">

            <div className="text-2xl text-center m-5">LOGIN</div>

            <div className="m-2">
                <label className="font-bold">EMAIL</label>
                <div>
                    <input 
                    type="text" 
                    name="email" 
                    value={loginInfo.email} 
                    onChange={()=>{}} 
                    className="border-2 m-2 p-3 rounded-md w-[560px]">            
                    </input>
                </div>
        
            </div>

            <div className="m-2">
                <label className="font-bold">PASSWORD</label>
                <div>
                    <input 
                    type="password"
                    name="pw"
                    value={loginInfo.pw} 
                    onChange={()=>{}} 
                    className="border-2 m-2 p-3 rounded-md w-[560px]">            
                    </input>
                </div>        
            </div>

            <div className="h-[20vh] text-center">
                <button 
                className="font-semibold text-center mt-5 h-14 w-4/6 rounded-md" 
                onClick={() => dispatch(postLoginThunk(loginInfo))}>
                    LOGIN
                </button>   
            </div>
        </div>

    );

}
 
export default LoginComponent;