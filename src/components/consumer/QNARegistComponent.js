import { useRef, useState } from "react";
import { postBoard, registBoard } from "../../api/ConsumerAPI";


const initState = {
    title: '제목',
    content: '내용',
    email: '이메일',
    nickname: '닉네임',
    fname:'',
    cateno:0,
    mno:0
}


const QNARegistComponent = ({moveList}) => {

    const fileRef = useRef()

    const [board, setBoard] = useState({...initState})

    // const handleChange = (e) => {

    //     board[e.target.name] = e.target.value

    //     setBoard({...board})
    // }
    const handleChange = (e) => {

        board[e.target.name] = e.target.value

        setBoard
        ({...board})

    }

    const handleClickSave = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", board.title)
        formData.append("content", board.content)
        // formData.append("writer", board.writer)
        // formData.append("EMAIL", board.email)
        formData.append("nickname", board.nickname)
        formData.append("cateno", 1)
        formData.append("mno", 502)

        // console.dir(fileRef.current)

        // const arr = fileRef.current.files

        //     for(let file of arr) {
        //         // files : 컨트롤러에서 받을 때 이름.
        //         formData.append("files", file) 
        // }
        
        // 등록하는 api호출
        
        // postBoard(formData).then(data => {
        //     const rno = data.result
        //     moveList()
        // })

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
                <div className="font-bold">TITLE</div>
                <input 
                type='text' 
                name='title' 
                value={board.title} 
                onChange={handleChange} 
                className="border-2 mt-2 mb-2 h-10 w-full">
                </input>
            </div>

            <div className="m-2 p-2 border-2">
                <div className="font-bold">CONTENT</div>
                <input 
                type='textarea' 
                name='content' 
                value={board.content} 
                onChange={handleChange} 
                className="border-2 mt-2 mb-2 h-[20vh] w-full">
                </input>
            </div>

            <div className="m-2 p-2 border-2">
                <div className="font-bold">NICKNAME</div>
                <input 
                type='text' 
                name='nickname' 
                value={board.nickname} 
                onChange={handleChange} 
                className="border-2 mt-2 mb-2 h-10">
                </input>
            </div>

            {/* <div className="m-auto border-2 font-bold">
                EMAIL 
                <input 
                type='text' 
                name='email' 
                value={board.email} 
                onChange={handleChange} 
                className="border-2 mt-2 mb-2 h-10">
                </input>
            </div> */}

            {/* <div className="m-2 p-2 border-2 font-bold">
                FILE
                <input 
                type='file' 
                ref={fileRef} 
                multiple 
                name='images' 
                onChange={handleChange}>
                </input>
            </div> */}

            <div className="mt-2">
                <button 
                className="w-20 p-2 m-2 rounded-md" 
                onClick={handleClickSave}>
                    SAVE
                </button>
                <button 
                className="w-auto p-2 m-2 rounded-md" 
                onClick={handleClickClear}>
                    CLEAR FILES
                </button>
                <button 
                className="w-20 p-2 m-2 rounded-md" 
                onClick={moveList}>
                    LIST
                </button>
            </div>
 
        </div>
     
     );
     
}
 
export default QNARegistComponent;