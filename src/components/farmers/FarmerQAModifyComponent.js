import { useEffect, useState } from "react"
import { deleteBoard, getOne, putBoard } from "../../api/FarmerAPI"
import { useRef } from "react"

const initState = {
  bno:0,
  title:'',
  content:'',
  writer:'',
  reg:'',
  modDate:'',
  nickname:'',
  email:'',
  images:[],
  mno:0,
  cateno:0
  
}

const FarmerQAModifyComponent = ({bno, moveList, moveRead, addUrl}) => {  

  const [board, setBoard] = useState(initState)
  const [files, setFiles] = useState([]);
  const fileRef = useRef()

  useEffect(() => {

    getOne(bno).then(data => {
      setBoard(data)

      console.log("ReadCom data:"+data)
    })
  },[bno])

    const handleClickDelete = () => {
        deleteBoard(bno).then(data => {
            alert("게시글이 삭제되었습니다.")

            
        })
    }

    const handleChange = (e) => {
        board[e.target.name] = e.target.value

        setBoard({...board})
    }

    const handleClickModify = () => {

        const formData = new FormData();

        formData.append("bno", board.bno)
        formData.append("nickname", board.nickname)
        formData.append("email", board.email)
        formData.append("title", board.title)
        formData.append("title", board.reg)
        formData.append("modDate", board.modDate)
        formData.append("content", board.content)
        formData.append("mno", 3)
        formData.append("cateno", 2)

      if(board.images){
        for (let pi of board.images) {
            formData.append("images", pi)
        }
      }
  
      const arr = fileRef.current.files
  
      for(let file of arr){
          formData.append("files", file) // files : 컨트롤러에서 받을 때 이름
      }

        putBoard(formData).then(data => {
            alert("수정되었습니다!")
            moveRead(bno)
        })
    }

    // // 파일 삭제버튼, 필터링 기능
    // const handleClickDelImg = (fname) => {
              
    //     const newArr = product.images.filter(ele => ele !== fname)

    //     product.images = newArr

    //     setProduct({...product})
    // }

  return ( 

  
    <div className="m-2 p-2">

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Bno</div>
          <div>{board.bno}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Nickname</div>
          <div>{board.nickname}</div>
      </div>
          
      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">Title</div>
        <input 
              type='text'
              name='title' 
              value={board.title}
              onChange={handleChange}
              className="border-2 border-gray-500 mt-2 mb-2 h-10 w-full bg-gray-200"
              >
        </input>
      </div>



      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Content</div>
          <input 
                type='textarea'
                name='content' 
                value={board.content}
                onChange={handleChange}
                className="border-2 border-gray-500 mt-2 mb-2 h-[30vh] w-full bg-gray-200"
                >
          </input>
      </div>

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">Image</div>
        <div className=" border-gray-500">
                 
          <input 
          type='file' 
          ref={fileRef} 
          multiple 
          name='images' 
          onChange={handleChange}></input>


          {/* <ul className="list-none flex mb-2 ">
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
          </ul> */}
                  
        </div>   
      </div>    

        <div className="flex justify-start">
          <button 
            onClick={handleClickModify}
            className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
            >Modify
          </button>

          <button 
            onClick={handleClickDelete} 
            className="bg-red-600 rounded-md w-20 p-2 m-2 text-white"
            >Delete
          </button>

          <button 
            onClick={() => window.location.href = addUrl.url}
            className="bg-green-600 rounded-md w-20 p-2 m-2 ml-20 text-white"
            >List
          </button>

        </div>
    
      {/* // </table> */}
      
     </div>
   );
}
 
export default FarmerQAModifyComponent;