import { useEffect, useState } from "react"
import {getCookies,setCookie} from "../../util/cookieUtil"
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"


const MyComponent = () => {

  const [params] = useSearchParams()

  const dataStr = params.get("data")

  console.log(dataStr)
  
  const dataObj = JSON.parse(dataStr)

  //소셜로그인 첫 회원인지 판단
  const social = dataObj.social;
  //rolename으로 재배자인지 소비자인지 판단.
  const rolename = dataObj.roleName;
  
  console.log(rolename)
  const navigate = useNavigate();

  useEffect(() => {

    const loadCookie = () => {
      const loginObj = getCookies("login")

      console.log("확인용------------------------------------------------------")
      console.log(dataObj)
      console.log("확인용------------------------------------------------------")

      if (loginObj) {
        return
      }


      return setCookie("login", JSON.stringify(dataObj), 1)

    }
    
    if(social){
      
      alert("수정페이지로 이동합니다.")
      navigate('../member/modify')
      
    }else{
      console.log("rolename------------------------------------------------------")
      console.log(rolename)
      console.log("rolename------------------------------------------------------")

      if(rolename === 'CONSUMER'){
        navigate('../consumer/farmer/list')
      }else if(rolename === 'FARMER'){
        navigate('../farmer/home')
      }

    } 

    loadCookie()
  }, [])

  
  return (
    <div>
      잘들어왔어 반가워
    </div>
  );
}

export default MyComponent;