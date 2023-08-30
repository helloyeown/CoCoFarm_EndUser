import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { getOne } from "../../api/FarmerAPI";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import { useParams } from "react-router";
import { getCookies } from "../../util/cookieUtil";
import { addBoardLike, deleteBoardLike, getBoardLikeCheck } from "../../api/likeAPI";

const initState = {
  bno:0,
  title:'',
  content:'',
  writer:'',
  reg:'',
  modDate:'',
  nickname:'',
  email:'',
  fname:'',
  images:[]
  
}

const FarmerDiaryReadComponent = ({refreshFn}) => {

  const {queryObj, moveList, moveModify} = useQueryObj()
  const {bno} = useParams()

  const [likeYn , setLikeYn] = useState(0);

  const [likes , setLikes] = useState(initState)

  const cookie = getCookies("login");

  const nav = useNavigate()

  const [board, setBoard] = useState(initState)
  const [files, setFiles] = useState([]);

  useEffect(() => {

    getOne(bno).then(data => {
      setBoard(data)

      console.log("ReadCom data:"+data)

      const fileList = data.fname ? data.fname.split(',') : [];       
      setFiles(fileList);

       // 좋아요누르는 사람의 pk
      // board.mno = cookie.mno

      // 구독자의 이메일
      likes.email = cookie.email
      setLikes(likes)

      // 좋아요를 누른 게시판인지 체크
      getBoardLikeCheck(bno,likes).then(data => {
          
          console.log("==========--getGudocCheck---==========")
          console.log(data)
          // alert(data)
          setLikeYn(data)
      
      })
    

    }).catch(e => {

      alert("파머 카테고리 실패")
    })

  },[bno , refreshFn])

  //좋아요버튼 누르면
  const like = () => { 

      //시용자의 이메일
      likes.email = cookie.email
      setLikes(likes)

      console.log("==========--like111---==========")
      addBoardLike(bno,likes).then(data => {
          console.log("==========--like222---==========")
          setBoard({...data})
          refreshFn()
      })
  }

  //좋아요 취소 버튼
  const likeCancel = () => {

      //구독자의 이메일
      likes.email = cookie.email
      setLikes(likes)

      deleteBoardLike(bno,likes).then(data => {
          console.log("==========--likeCancel---==========")
          setBoard({...data})
          refreshFn()
      })
  }

  return ( 

    <div className="m-2 p-2">

      <div className="m-2 p-2 border-2 hidden">
          <div className="text-orange-500 font-bold">bno</div>
          <div>{board.bno}</div>
      </div>

      <div className="m-2 p-2 border-2 flex justify-between">
        <div>
          <div className="text-orange-500 font-bold">상품이름</div>
          <div>{board.title}</div>
        </div>
        <div>
        <button className="text-orange-500 font-bold mr-11"
          onClick={likeYn === 0 ? () => like() : () => likeCancel()}
        >
          {likeYn === 0 ? <span>좋아요</span> : <span className="bg-gray-100 text-gray-500">좋아요취소</span>}
        </button>
        </div>
      </div>

      

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Email</div>
          <div>{board.email}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">RegDate</div>
          <div>{board.reg}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">ModDate</div>
          <div>{board.modDate}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Title</div>
          <div>{board.title}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Content</div>
          <div>{board.content}</div>
      </div>

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">Image</div>                 
        <div>
          <ul className="list-none">
            {files.map((filelist, idx) =>                     
              <li key={idx}
                  className="mb-2"
              >
                <img src={`http://192.168.0.74/${filelist}`} alt='ddd' className="w-[600px] h-[600px]"></img>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* 상품 이미지 map //end */}

      <div>

        <button         
        onClick={() => moveModify(board.bno)}
        className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
        >Modify
        </button>
        <button 
        onClick={() => nav("/farmer/diary/")}
        className="bg-green-600 rounded-md w-20 p-2 m-2 ml-20 text-white"
        >List
        </button>
    
      </div>

    </div>
    // <div className="items-center justify-center container flex">

    //   <div>
    //   <table className="w-[1200px] items-center justify-center">
    //     <thead className="">
    //       <tr className="bg-gray-200">
    //           <td className="border-2 font-medium w-32 text-center ">No</td>
    //           <td className="border-2">{board.bno}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium text-center">NickName</td>
    //           <td className="border-2">{board.nickname}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium text-center">Email</td>
    //           <td className="border-2">{board.email}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium text-center">RegDate</td>
    //           <td className="border-2">{board.reg}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium text-center">ModDate</td>
    //           <td className="border-2">{board.modDate}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium h-10 text-center">Title</td>
    //           <td className="border-2">{board.title}</td>
    //       </tr>
          
    //       <tr >
    //           <td className="border-2 font-medium h-80 text-center">Content</td>
    //           <td className="border-2">{board.content}</td>             
    //       </tr>


            
    //     </thead>

    //     <div className="flex">
    //     <button         
    //     onClick={() => moveModify(board.bno)}
    //     className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
    //     >Modify
    //     </button>

    //    <button 
    //     onClick={() => nav("/farmer/diary/")}
    //     className="bg-green-600 rounded-md w-20 p-2 m-2 ml-20 text-white"
    //     >List
    //     </button>
    //   </div>
         
    //   </table>

    //   </div>
      

    // </div>
   );
}
 
export default FarmerDiaryReadComponent;