import { useEffect, useState } from "react";
import { readOne } from "../../api/productAPISong";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import { getCookies } from "../../util/cookieUtil";
import { addProductLike, deleteBoardLike, deleteProductLike, getProductLikeCheck } from "../../api/likeAPI";

const initState = {
  pno:0,
  pname:'',
  price:'',
  writer:'',
  reg:'',
  modDate:'',
  fname:'',
  images:[]  
  
}

const FarmerBoardReadComponent = ({pno,refreshFn}) => {

  const [board, setBoard] = useState(initState)
  const [files, setFiles] = useState([]);
  const [likeYn , setLikeYn] = useState(0);

  const [likes , setLikes] = useState(initState)


  const {queryObj, moveBoardList, moveProductModify} = useQueryObj()

  const cookie = getCookies("login");
  // const mno = cookie.mno;

  useEffect(() => {

    readOne(pno).then(data => {

      console.log("========================================" ,data )
      setBoard(data)
      
      const fileList = data.fname ? data.fname.split(',') : [];
      setFiles(fileList);

      console.log("ReadCom data:"+ data)
      // 좋아요누르는 사람의 pk
      // board.mno = cookie.mno

      // 구독자의 이메일
      likes.email = cookie.email
      setLikes(likes)

      // 좋아요를 누른 게시판인지 체크
      getProductLikeCheck(pno,likes).then(data => {
          
          console.log("==========--getGudocCheck---==========")
          console.log(data)
          // alert(data)
          setLikeYn(data)
      
      })

    }).catch(e => {

      alert("로딩실패")

    })

  },[pno,refreshFn])


  //좋아요버튼 누르면
  const like = () => { 

      //시용자의 이메일
      likes.email = cookie.email
      setLikes(likes)

      console.log("==========--like111---==========")
      addProductLike(pno,likes).then(data => {
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

      deleteProductLike(pno,likes).then(data => {
          console.log("==========--likeCancel---==========")
          setBoard({...data})
          refreshFn()
      })
  }



  return ( 
   
    <div className="m-2 p-2">

      <div className="m-2 p-2 border-2 hidden">
          <div className="text-orange-500 font-bold ">Pno</div>
          <div>{board.pno}</div>
      </div>
      
      <div className="m-2 p-2 border-2 flex justify-between">
        <div>
          <div className="text-orange-500 font-bold">상품이름</div>
          <div>{board.pname}</div>
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
          <div className="text-orange-500 font-bold">Reg</div>
          <div>{board.regDate}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">ModDate</div>
          <div>{board.modDate}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품설명</div>
          <div>{board.pdesc}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품가격</div>
          <div>{board.price}</div>
      </div>

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">상품사진</div>                 
        <div>
          <ul className="list-none">
            {files.map((filelist, idx) =>                     
              <li key={idx}
                  className="mb-2">
                <img src={`http://192.168.0.48/${filelist}`} alt='ddd' className="w-[600px] h-[600px]"></img>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* 상품 이미지 map //end */}

      <div>

        <button 
          className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
          onClick={() => moveProductModify(board.pno)}
      
          >Modify</button>
        <button 
          className="border-2 w-20 mt-4 p-2 rounded-md bg-gray-600 text-white "
          onClick={() => moveBoardList()}
      
          >List</button>
    
      </div>
      

    </div>
  );
}
 
export default FarmerBoardReadComponent;