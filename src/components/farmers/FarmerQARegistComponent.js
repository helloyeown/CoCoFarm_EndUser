import { useRef, useState } from "react"
import { registBoard } from "../../api/FarmerAPI"

const initState = {
  title:'제목 TEST',
  content:'내용 TEST',  
  email:'Email TEST',
  nickname:'NickName TEST',
  cateno:0,
  mno:0


}

const FarmerQARegistComponent = ({moveList}) => {

    const fileRef = useRef()

    const [board, setBoard] = useState({...initState})


    const handleChange = (e) => {

        board[e.target.name] = e.target.value

        setBoard({...board})
    }

    const handleClickSave = (e) => {
        
        const formData = new FormData();

        formData.append("title", board.title)
        formData.append("content", board.content)
        // formData.append("email", board.email)
        //formData.append("nickname", board.nickname)
        formData.append("cateno", 1)
        formData.append("mno", 3)

        console.dir(fileRef.current)

        const arr = fileRef.current.files

        for(let file of arr){
            formData.append("files", file) // files : 컨트롤러에서 받을 때 이름
        }

        registBoard(formData).then(data => {
        moveList()
        })
        
    }

    const handleClickClear = (e) => {
        
        fileRef.current.value = ''
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

            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">NickName</div>
                <input 
                type='text' 
                name='nickname' 
                value={board.nickname} 
                onChange={handleChange}
                className="border-2 mt-2 mb-2 h-10">

                </input>
            </div>



            <div className="m-2 p-2 border-2">                 
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
                onClick={moveList}
                className="bg-gray-600 rounded-md w-20 p-2 m-2 text-white"
                >List
                </button>                
            </div>
        </div>

   );
}
 
export default FarmerQARegistComponent;