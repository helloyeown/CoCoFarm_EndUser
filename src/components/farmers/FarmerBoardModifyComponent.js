import { useState } from "react"
import useQueryObj from "../../hooks/farmers/useQueryObj"
import { useEffect } from "react"
import { deleteProduct, putProduct, readOne } from "../../api/productAPISong"
import { useRef } from "react"
import { getCookies } from "../../util/cookieUtil"

const initState = {
  pno:0,
  pname:'',
  price:'',
  writer:'',
  reg:'',
  modDate:'',
  fname:'',
  images:[],
  mno:0  
  
}

const FarmerBoardModifyComponent = ({pno, mno}) => {

  const [board, setBoard] = useState(initState)
  
  const [files, setFiles] = useState([]);

  const cookie = getCookies("login")

  const {queryObj, moveBoardList, moveProductRead, moveHomeList} = useQueryObj()

  const fileRef = useRef()

  

  useEffect(() => {

    readOne(pno).then(data => {

      console.log("=============================================" ,data )
      setBoard(data)

      const fileList = data.fname ? data.fname.split(',') : [];       
      setFiles(fileList);

      console.log("Modify data:"+data)
    }).catch(e => {

      alert("asd")

    })
  },[pno])
  

  const handleClickDelete = () => {
    deleteProduct(pno).then(data => {
        alert("상품이 삭제되었습니다.")
    
    moveHomeList()    
    })
  }

  const handleChange = (e) => {
    board[e.target.name] = e.target.value

    setBoard({...board})
  }


  const handleClickModify = () => {

    const formData = new FormData();

    formData.append("pno", board.pno)
    formData.append("pname", board.pname)
    formData.append("pdesc", board.pdesc)
    formData.append("price", board.price)
    formData.append("procateno", board.procateno)
    formData.append("mno", cookie.mno)    

    if(board.images){
        for (let pi of board.images) {
            formData.append("images", pi)
        }
    }

    const arr = fileRef.current.files

    for(let file of arr){
        formData.append("files", file) // files : 컨트롤러에서 받을 때 이름
    }

    putProduct(formData).then(data => {
        console.log("pno"+ pno)
        console.log(board.mno)
        console.log(board.pdesc)

        alert("수정되었습니다!")
        moveProductRead(pno)
    })
  }


  const handleClickDelImg = (files) => {
              
    const newArr = board.images.filter(ele => ele !== files)

    board.images = newArr

    setBoard({...board})
  }

  return ( 

    <div className="m-2 p-2">

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Pno</div>
          <div>{board.pno}</div>
      </div>
          
      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">상품이름</div>
        <input 
              type='text'
              name='pname' 
              value={board.pname}
              onChange={handleChange}
              className="border-2 border-gray-500 mt-2 mb-2 h-10 w-full bg-gray-200"
              >
        </input>
      </div>



      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품설명</div>
          <input 
                type='text'
                name='pdesc' 
                value={board.pdesc}
                onChange={handleChange}
                className="border-2 border-gray-500 mt-2 mb-2 h-10 w-full bg-gray-200"
                >
          </input>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품가격</div>
          <input 
                type='text'
                name='price' 
                value={board.price}
                onChange={handleChange}
                className="border-2 border-gray-500 mt-2 mb-2 h-10 w-full bg-gray-200"
                >
          </input>
                 
      </div>

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">카테고리</div>
          <select value={board.procateno}
                  onChange={e => {
                    board.procateno = e.target.value
                  setBoard({...board})
          }}>
            <option value={''}>---</option>
            <option value={'1'}>곡류</option>
            <option value={'2'}>채소</option>
            <option value={'3'}>과일</option>
            <option value={'4'}>곡류가공품</option>
            <option value={'5'}>채소가공품</option>
            <option value={'6'}>과일가공품</option>
          </select>
      </div>

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">상품사진</div>
        <div className=" border-gray-500">
                 
          <input 
          type='file' 
          ref={fileRef} 
          multiple 
          name='images' 
          onChange={handleChange}></input>


          <ul className="list-none flex mb-2 ">
          {files.map((filelist, idx) =>                     
            <li key={idx} className="ml-2 mt-2 border-2 border-gray-500">
              <button 
                className="bg-gray-300 w-6 h-6 text-center font-light mb-1 mt-2 ml-1"
                onClick={() => handleClickDelImg(filelist)}>
                X
              </button>
              <img src={`http://192.168.0.74/${filelist}`} alt='ddd' className="w-[200px] h-[200px]"></img>
            </li>
            )}
          </ul>
                  
        </div>   
      </div>

      <div>

        <button 
          className="bg-green-500 rounded-md w-20 p-2 m-2 text-white"
          onClick={handleClickModify}
      
          >Save</button>

        <button 
          onClick={handleClickDelete} 
          className="bg-red-600 rounded-md w-20 p-2 m-2 text-white"
          >Delete
        </button>

        <button 
          className="border-2 w-20 mt-4 p-2 rounded-md bg-gray-600 text-white "
          onClick={() => moveBoardList()}
      
          >List</button>
    
      </div>

    </div>

    
   );
}
 
export default FarmerBoardModifyComponent;