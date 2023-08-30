import { useEffect, useState } from "react"
import { deleteBoard, getOne } from "../../api/ConsumerAPI"
import { useParams } from "react-router-dom"


const initState = {
    bno:0,
    title:'',
    content:'',
    nickname:'',
    regDate:'',
    modDate:'',
}


const QNAReadComponent = ({moveDelete, moveModify, moveList}) => {

    // const {queryObj, moveList, moveModify} = useQueryObj()
    // const {bno} = useParams()
    const [board, setBoard] = useState(initState)

    const {bno} = useParams();

    console.log(bno)

    useEffect(() => {

        getOne(bno).then(data => {
            console.log("==========-----==========")
            console.log(data)
            setBoard(data)
        })
        
    }, [bno])

    const handleClickDelete = () => {
        deleteBoard(bno).then(data => {
            alert("삭제되었습니다!!!!!")
            moveList()
        })
    }

    return ( 

        <div className="w-[1200px] items-center justify-center m-auto">
            <table className="w-full">
                <thead className="">
                    <tr>
                        <td className="border-2 font-medium w-32 text-center ">NO.</td>
                        <td className="border-2">{board.bno}</td>
                    </tr>
                    <tr >
                        <td className="border-2 font-medium h-10 text-center">TITLE</td>
                        <td className="border-2">{board.title}</td>
                    </tr>
                    <tr >
                        <td className="border-2 font-medium h-80 text-center">CONTENT</td>
                        <td className="border-2">{board.content}</td>             
                    </tr>
                    <tr >
                        <td className="border-2 font-medium text-center">NICKNAME</td>
                        <td className="border-2">{board.nickname}</td>
                    </tr>
                    <tr >
                        <td className="border-2 font-medium text-center">REGDATE</td>
                        <td className="border-2">{board.regDate}</td>
                    </tr>
                    <tr >
                        <td className="border-2 font-medium text-center">MODDATE</td>
                        <td className="border-2">{board.modDate}</td>
                    </tr>
                </thead>
            </table>

            <div className="flex">
                <button 
                    className="w-auto p-2 m-2 border-2 rounded-md font-bold"
                    onClick={() => moveModify(board.bno)}>
                    MODIFY
                </button>
                <button 
                    className="w-auto p-2 m-2 border-2 rounded-md font-bold"
                    onClick={moveList}>
                    LIST
                </button>
                <button 
                    className="w-auto p-2 m-2 border-2 rounded-md font-bold"
                    onClick={handleClickDelete}>
                    DELETE
                </button>
            </div>
        </div>

     );

}
 
export default QNAReadComponent;