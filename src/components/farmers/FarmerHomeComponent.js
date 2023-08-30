import { useEffect, useState } from "react"
import { getFarmerOne } from "../../api/FarmerAPI"
import farmImage01 from "../../public/farmerImage01.jpg"
import { getCookies } from "../../util/cookieUtil"

const initState = {

  mno:0,
  email:'',
  intro:'',
  nickname:'',
  roleName:'',
  profile:''

}

const FarmerHomeComponent = ({mno}) => {

  const sess = getCookies("login")
  
  console.log(sess);

  
  const [board, setBoard] = useState(initState)

  

  useEffect(() => {

    console.log("================================");
    console.log(sess);
    console.log("================================");    

    

    getFarmerOne(sess.mno).then(data => {
      setBoard(data)
      console.log("Farmer ReadCom data:" + data)
    })

  },[sess.mno])
  
  return ( 

    <div className="flex container h-[200px] mt-3 ">
        
      <div className=" w-[300px] flex justify-center items-center">
        {/* <img src={farmImage01} alt="farmImage01" 
        className="rounded-[50%] object-cover w-[180px] h-[180px] justify-center flex">

        </img> */}
        <img alt="farmImage01" 
        className="rounded-[50%] object-cover w-[180px] h-[180px] justify-center flex"
        src={board.profile === '' ? "http://192.168.0.74/default.jpg" : board.profile}>
        </img>
      </div>

      <div className="w-full flex">
        <div className="m-3 w-full ">
            <div className="mt-5 ">
              <span className="text-3xl font-semibold">{board.nickname}</span>
              <button 
                className="border-gray-400 ml-28 p-1 border-2 rounded-md
                hover:bg-black hover:text-white text-center text-sm">
                프로필수정
              </button>
            </div>
            <div className="mt-2">
              <span className="">{board.email}</span>
              <span className="ml-5 bg-red-400">구독자 1.2만명</span>
              <span className="ml-5 bg-blue-200">게시글 120개</span>
            </div>
            <div className="mt-3">
              
              <div>
                {board.intro}                
              </div>
            
            </div>
        
        </div>
      
      </div>

    </div>  

   );
}
 
export default FarmerHomeComponent;