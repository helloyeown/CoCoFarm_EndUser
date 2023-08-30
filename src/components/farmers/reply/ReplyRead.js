import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../../api/farmerRepliesAPI";


const initState ={
    rno:0,
    bno:0,
    reply:'',
    // replyFile:'',
    // replyer:''
}

const ReplyRead = ({rno, cancelRead, refreshPage}) => {

    console.log("rno=======" + rno)

    const [reply, setReply] = useState(initState)

    useEffect(() => {

        getReply(rno).then(data => {
            console.log("getReply data =====" + data)
            setReply(data)
        })

    },[rno])

    const handleClickDelete = () => {

        // deleteReply API
        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage()
        })
    }

    const handleChange = (e) => {

        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickModify = () => {

        putReply(reply).then(data => {
            alert(`${data.result} 수정되었습니다.`)
            refreshPage(true)
        })
    }

    if(reply.reply === '해당 글은 삭제되었습니다.'){
        return <></>
    }




    return ( 
        <div className="mt-4 bg-sb-03 border-2">
            <div className="mb-2 ml-2 font-extrabold text-orange-400">Reply Read</div>

            <table className="readList">
                <thead className="">
                    <tr className="">
                        <td className="border-2 font-medium w-32 text-center ">No</td>
                        <td className="border-2 w-[75vw]">{rno}</td>
                    </tr>

                    <tr >
                        <td className="border-2 font-medium text-center">Wirter</td>
                        <td className="border-2">{reply.nickname}</td>
                    </tr>

                    <tr >
                        <td className="border-2 font-medium text-center">Title</td>
                        <td className="border-2 ">
                            <input 
                            type="text" 
                            name="reply" 
                            onChange={handleChange} 
                            value={reply.reply}
                            className="border-2 bg-yellow-100 w-full"
                            >
                            </input>
                        </td>
                    </tr>
                   
                </thead>
            
            </table>

            {/* <div>
                <div>{rno}</div>

                <div>
                    <input 
                    type="text" 
                    name="replyText" 
                    onChange={handleChange} 
                    value={reply.replyText}
                    className="border-2"
                    >

                    </input>
                </div>

                <div>{reply.replyer}</div>
                
            </div> */}


            

            <div>
            <button 
                onClick={handleClickModify}
                className="border-2 mt-4 p-1 rounded-md bg-green-700 text-white"
                >
                    Modify
                </button>

                <button 
                onClick={handleClickDelete}
                className="border-2 mt-4 p-1 rounded-md ml-2 bg-red-700 text-white"
                >
                    Delete
                </button>

                <button 
                onClick={cancelRead}
                className="border-2 mt-4 p-1 rounded-md ml-2 bg-blue-700  text-white"
                >
                    Cancel
                </button>

            </div>
        </div>
     );
}
 
export default ReplyRead;