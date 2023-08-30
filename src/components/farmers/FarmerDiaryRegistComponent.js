import { useState } from "react"
import { useRef } from "react"
import { registBoard } from "../../api/FarmerAPI"
import { useNavigate } from "react-router-dom"
import useQueryObj from "../../hooks/farmers/useQueryObj"
import { getCookies } from "../../util/cookieUtil"


const initState = {
  title:'재배일지',
  content:'재배일지 내용',  
  email:'',
  nickname:'',
  mno:0,
  cateno:0,
  view:0
  

}

const FarmerDiaryRegistComponent = () => {
  
  const fileRef = useRef()

  const [board, setBoard] = useState({...initState})

  const cookie = getCookies("login")

  const nav = useNavigate()

  const {moveDiaryList} = useQueryObj()


  const handleChange = (e) => {

      board[e.target.name] = e.target.value

      setBoard({...board})
  }

  const handleClickSave = (e) => {
      
      const formData = new FormData();

      formData.append("title", board.title)
      formData.append("content", board.content)
      formData.append("mno", cookie.mno)
      // formData.append("nickname", board.nickname)
      formData.append("cateno", 2)
      formData.append("view", board.view)

      console.dir(fileRef.current)

      const arr = fileRef.current.files

      for(let file of arr){
          formData.append("files", file) // files : 컨트롤러에서 받을 때 이름
      }

      registBoard(formData).then(data => {
      moveDiaryList()
      })
      
  }

  const handleClickClear = () => {

    setBoard({
      ...board,
      imagePreviewURLs: [] // 이미지 URL 배열 초기화
    })

    fileRef.current.value = null // 파일 선택 input 초기화
  }

  return ( 

    <div className="m-2 p-2">
            
      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">Title</div>
        <input 
        type='text'
        name='title' 
        value={board.title}
        onChange={handleChange}
        className="border-2 mt-2 mb-2 h-10 w-full"
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
        className="border-2 mt-2 mb-2 h-[20vh] w-full"
        >

        </input>
      </div>

      {/* <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">NickName</div>
        <div name='nickname'>{board.nickname}</div>

      </div> */}

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">상품사진</div>                 
          <input 
          type='file' 
          ref={fileRef} 
          multiple 
          name='images' 
          onChange={handleChange}></input>
      </div>

      <div className="mt-2">
        <button 
        onClick={handleClickSave}
        className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
        >Save
        </button>

        <button 
        onClick={handleClickClear}
        className="bg-orange-500 rounded-md w-auto p-2 m-2 text-white"
        >ClearFiles
        </button>

        <button 
        onClick={() => nav("/farmer/diary/")}
        className="bg-gray-600 rounded-md w-20 p-2 m-2 text-white"
        >List
        </button>                
      </div>

    </div>

   );
}
 
export default FarmerDiaryRegistComponent;