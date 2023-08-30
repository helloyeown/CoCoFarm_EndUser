import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin, requestLogout } from "../../reducers/loginSlice";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";

const initState = {
  username:'aaa1@email.com',
  password:'1111'
}

const FarmerSiginComponent = () => {
  const loginSlice = useSelector(state => state.login)

  const [loginInfo , setloginInfo] = useState({...initState})
  const [msg , setMsg] = useState()

  const nav = useNavigate()

  useEffect(() => {
      
      //로그인 성공시 
      if( loginSlice.email ){
          nav("/farmer/home")
      }

  },[loginSlice.loading])
  
  const handleChange = (e) => {

    loginInfo[e.target.name] = e.target.value
    setloginInfo({...loginInfo})
      
  } 

  const handleSignUp = (e) => {

    nav("../member/signup")
    
  }
  
  const dispatch = useDispatch()

  const handleLogin = async () => {
      // 로그인 성공 후에 할 작업을 수행
      try {
        const actionResult = await dispatch(postLoginThunk(loginInfo));
        const result = unwrapResult(actionResult);
        
        if(result.roleName !== 'ADMIN'){
          // FARMER
          // CONSUMER

          // if(result.roleName === 'FARMER'){
          // if(result.roleName === 'CONSUMER'){

          console.log('Login successful:', result.roleName);

        }else{
          
          dispatch(requestLogout())
          nav("/farmer/signin")
          console.log('대실패:', result.roleName);
          setMsg('권한이 없는 아이디 입니다.')
        }
      
      } catch (error) {
        console.error('Login error:', error);
        dispatch(requestLogout())
        nav("/farmer/signin")
        console.log('대실패:', '초초 대실패');
        setMsg('아이디 또는 비밀번호가 틀렸습니다.')

        // 로그인 에러 처리
      }
  };

  // 에러미시지 추출
  const errorMsg = loginSlice.errorMsg



return (  

    <div className="border-2 bg-gray-200 rounded-md ml-auto mr-auto mt-14 w-[600px] h-[450px]">

      <div className="text-2xl text-center text-green-500 m-5">생산자 로그인</div>

      <div className="m-2">
        <label className="text-gray-700 font-bold">Email</label>
        <div>
          <input type="text" name="username" value={loginInfo.username} 
          onChange={handleChange}
          className="border-2 m-2 p-3 rounded-md w-[560px]">            
          </input>
        </div>
        
      </div>

      <div className="m-2">
        <label className="text-gray-700 font-bold">Password</label>
        <div>
          <input type="password"  name="password" value={loginInfo.password}
          onChange={handleChange}
          className="border-2 m-2 p-3 rounded-md w-[560px]">            
          </input>
        </div>
      </div>

      <div className="h-[20vh] text-center">
        
          <button
            className="bg-blue-400 font-semibold text-center mt-5 h-14 w-4/6 rounded-md" 
            // onClick={() => {window.location.href = "http://localhost:3000/farmer/home"}}
            onClick={handleLogin}
            >
            LOGIN
          </button>
          <button 
            className="bg-blue-400 font-semibold text-center mt-5 h-14 w-4/6 rounded-md" 
            // onClick={() => {window.location.href = "http://localhost:3000/farmer/home"}}
            onClick={handleSignUp}
            >
            SignUp
          </button>

      </div>

      <div className="">{loginSlice.loading ? 
            <div className="absolute top-0 bg-gray-100 w-full h-[100vh]" style={{left:"0px"}}>
                <div className="m-auto mt-80 w-20 h-20 border-8 border-b-slate-600 border-slate-300 rounded-full animate-spin"></div>
                <div className="m-auto w-32 h-32 mt-8">Loding.....</div>
            </div> : <div className="text-center text-red-600 mt-3" style={{fontSize:"20px"}}>{msg}</div>
            }
      </div> 



    </div>
        
        
        
        
        

    
);
}

export default FarmerSiginComponent;