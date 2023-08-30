import { useState } from "react"
import { useSelector } from "react-redux"
import { createSearchParams, useNavigate } from "react-router-dom"
import { insertMember, modifyMember, signupMember } from "../../api/LoginApi"
import DaumPostcode from 'react-daum-postcode';
import { useEffect } from "react";


const initState = {
    email:'user00@aaa.com',
    pw:'1111',
    pw2:'1111',
    tel:'010-1111-2222',
    nickname:'차은우',
    address:'한천로',
    intro:'자기소개',
    ebaddress:'상세한 주소',
    roleName:'FARMER',
    social:false,
    profile:[]
}


const FarmerSignUpComponent = () => {

    const [loginInfo , setloginInfo] = useState({...initState})

    

    const nav = useNavigate()

    const handleChange = (e) => {

        loginInfo[e.target.name] = e.target.value
        setloginInfo({...loginInfo})

    }

    const registInsert = (e) => {
        alert("가입 테스트")

        signupMember(loginInfo).then(mno => {
            
            console.log(loginInfo);
            const data = createSearchParams(loginInfo).toString();
            console.log("mnomnomnomnomnomnomno");
            console.log(mno.result);
            console.log("mnomnomnomnomnomnomno");

            //네이게이션 으로 바꿔줘야함

            //쿠키 작업해야함
            nav("/member/loginhandler?mno="+ mno.result + "&" + data)

            // alert("다끝났어 여길로 다시들어왔어")
                        
            nav("/farmer/signin")

        })
        
    }

    // registInsert()

    // useEffect(() => {



    // },[])

    //주소 입력 모달
        /**
     * useState
     */
        const [openPostcode, setOpenPostcode] = useState(false);

        /**
         * handler
         */
        const handle = {
            // 버튼 클릭 이벤트
            clickButton: () => {
                setOpenPostcode(current => !current);
            },
    
            // 주소 선택 이벤트
            selectAddress: (data) => {
                console.log(
                    `주소: ${data.address},
                     우편번호: ${data.zonecode}`
                )
                loginInfo.address = data.address
                loginInfo.zonecode = data.zonecode

                setloginInfo({...loginInfo})

                setOpenPostcode(false);
                // getAddress(data)
            },
        }




   return (
        <div>

            <div className="mt-24 w-3/6 border-4 border-gray-800 rounded-xl bg-slate-100">

                <div className="flex justify-between">
                    <div className="m-2 text-3xl pl-2">회원 가입</div>
                    <div className="m-2 pl-2">*표시는 필수 입력사항</div>
                </div>
                <table className="m-4">

                    <tr className="">
                        <td>
                            <label>*Email</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="text" name="email" value={loginInfo.email} onChange={handleChange}></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>*비밀번호 : </label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="password" name="pw" value={loginInfo.pw} onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>*비밀번호 확인:</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="password" name="pw2" value={loginInfo.pw2} onChange={handleChange}></input>
                            <button className="bg-orange-500 p-2">비밀번호 확인</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>

                    <tr >
                        <td>
                            <label>*연락처</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="tel" name="tel" value={loginInfo.tel} onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>

                    <tr >
                        <td>
                            <label>*닉네임</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="text" name="nickname" value={loginInfo.nickname} onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>

                    <tr >
                        <td>
                            <label>*주소 입력</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="text" name="address" value={loginInfo.address}></input>
                            <button onClick={handle.clickButton} className='z-50 border-2 bg-white'>주소 입력</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        </td>
                    </tr>

                    <tr >
                        <td>
                            <label>*상세 주소</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="text" name="ebaddress" value={loginInfo.ebaddress} onChange={handleChange}></input>
                        </td>
                    </tr>

                    <tr >
                        <td>
                            <label>*사진</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="file" name="profile" onChange={handleChange}></input>
                        </td>
                    </tr>

                    <tr>
                        <td className="">
                        </td>
                        <td className=" pt-2 pl-0">
                            <button className="border-4 border-gray-600 p-2 rounded-xl" onClick={() => registInsert()}>
                                가입하기
                            </button>
                            {/* <button className="ml-2 border-4 border-gray-600 p-2 rounded-xl" onClick={() => nav("../consumer/list")}>
                                취   소
                            </button> */}
                        </td>
                    </tr>

                </table>
            </div>

            {openPostcode && 
            <div className="border-blue-500 border-2 w-1/2 absolute top-9 left-9">
                <DaumPostcode 
                    onComplete={handle.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                    autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                    defaultQuery='' // 팝업을 열때 기본적으로 입력되는 검색어 
                />
            </div>    
            }
        </div>
    );
}

export default FarmerSignUpComponent;