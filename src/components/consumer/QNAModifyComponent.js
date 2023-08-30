import { useEffect, useRef, useState } from "react";
import { deleteBoard, getOne, putBoard } from "../../api/ConsumerAPI";


const initState = {
    bno:0,
    title:'',
    content:'',
    writer:'',
    nickname:'',
    regDate:'',
    modDate:'',
    images: []
}


const QNAModifyComponent = ({bno, moveList, moveRead}) => {
    
    
    const [board, setBoard] = useState(initState)

    // console.log("modify com:" + bno)
    // console.log("modify title:" + board.title)

    const fileRef = useRef()

    // useEffect(() => {

    //     getOne(bno).then(data => {
    //         setBoard("data: " + data)
    //     })

    // }, [bno])

    const handleChange = (e) => {
        board[e.target.name] = e.target.value
        setBoard({...board})
    }



    const handleClickDelete = () => {
        deleteBoard(bno).then(data => {
            alert("삭제되었습니다!!!!!")
            moveList()
        })
    }

    const handleClickModify = () => {

        const formData = new FormData();

        formData.append("bno", board.bno)
        formData.append("title", board.title)
        formData.append("content", board.content)
        formData.append("nickname", board.nickname)
        formData.append("regDate", board.regDate)
        formData.append("modDate", board.modDate)
      
        if(board.images) {
            for (let pi of board.images) {
                formData.append("images", pi)
            }
        }

        const arr = fileRef.current.files

        for (let file of arr) {
            formData.append("files", file)
        }

        putBoard(formData).then(data => {
            alert("수정되었습니다!!!!!")
            moveRead(bno)
        }).catch(e => {
            alert("실패!!!!!")
        })

    }

    // const handleClickDeleteImg = (fname) => {

    //     //파라미터로 받은 파일명과 다른것만 추출
    //     //filter로 다른 이미지 명만 배열로 나옴
    //     const newArr = board.images.filter(ele => ele !== fname)

    //     board.images = newArr

    //     setBoard({...board})

    // }

    return (

        <div>
            <ul>
                <li className="py-5 border-b">
                    <div className="my-5 text-2xl font-medium">
                        TITLE
                    </div>
                    <input
                    className="w-full h-12 px-3 border"
                    type="text"
                    name="title"
                    value={board.title || ''}                    
                    onChange={handleChange}>
                    </input>
                </li>
                <li className="py-5 border-b">
                    <div className="my-5 text-2xl font-medium">
                        CONTENT
                    </div>
                    <textarea
                    name="content"
                    cols={4}
                    value={board.content || ''}
                    onChange={handleChange}
                    className="w-full p-3 border resize-none">
                        {board.content}
                    </textarea>
                </li>
                <li className="py-5 border-b">
                    <div className="my-5 text-2xl font-medium">
                        FILE
                    </div>
                    <input type="file" ref={fileRef} name="images" multiple></input>
                </li>
            </ul>

            {/* <div className="mt-5 p-5 border">
                <ul className="flex">
                    {board.images && board.images.map( (fname, idx) => 
                        <li
                        key={idx}
                        className="relative px-3 first:pl-0">
                            <img className="inline-block" src={`http://localhost/s_${fname}`}/>
                            <button
                            className="w-8 h-8 absolute right-[-3px] top-[-10px] bg-[#aaa] rounded-full text-white"
                            onClick={() => handleClickDeleteImg(fname)}>
                                X
                            </button>
                        </li>
                    )}
                </ul>
            </div> */}

            <div className="flex justify-end">
                <button
                className="h-10 px-3 rounded mt-3 mr-3"
                onClick={handleClickModify}>
                    MODIFY
                </button>
                <button
                className="h-10 px-3 rounded mt-3 mr-3"
                onClick={handleClickDelete}>
                    DELETE
                </button>
                <button
                className="h-10 px-3 rounded mt-3"
                onClick={moveList}>
                    LIST
                </button>
            </div>
        </div>

    );
  
}

export default QNAModifyComponent;