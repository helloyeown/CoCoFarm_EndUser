import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAccessToken, getUserEmail } from "../../api/kakaoAPI";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../reducers/loginSlice";
// import { getAccessToken, getUserEmail } from "../../api/kakaoAPI";

const KakaoRedirectPage = () => {
    
    const [searchParams] = useSearchParams()

    const authCode = searchParams.get("code");

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:8080/api/member/kakao?code=${authCode}`).then(res => {

            console.log(res.data)

            const memberInfo = res.data

            const {nickname} = memberInfo

            dispatch(requestLogin(memberInfo))
            alert("로그인 성공")

            if(nickname === 'SOCIAL_MEMBER'){
                // navigate('/member/modify') 수정페이지 만들어줘야한다.
                alert("수정페이지로 가는거 만들어줘라")
                navigate('../member/modify')

            }else{
                navigate('/')
            }
  

        })

        // 서버 사이드로 뺄때는 필요없다.
        // getAccessToken(authCode).then(accessToken => {

        //     console.log("accessToken: -----" , accessToken)

        //     getUserEmail(accessToken).then( email => {
        //         console.log(email)
        //     })

        // })


    } , [authCode])

    return ( 
        <div>  
            {authCode}
        </div>
    );
}
 
export default KakaoRedirectPage;