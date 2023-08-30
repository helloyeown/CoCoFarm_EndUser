import { useEffect, useState } from "react";
import { postReply } from "../../../api/farmerRepliesAPI";
import { getCookies } from "../../../util/cookieUtil";


const initState = {
    bno:0,
    reply:'',
    mno:0,
    // replyFile:'',
    // replyer:''

}

const ReplyInput = ({bno, refreshLast}) => {

    const [reply, setReply] = useState({...initState})
    const cookie = getCookies("login")


    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickRegister = (e) => {
        
        reply.bno = bno;
        reply.mno = cookie.mno

        // {result:278}
        postReply(reply).then(data => {
            
            console.log(data)

            alert(`${data.result}번 댓글 등록완료`)

            refreshLast()

            setReply({...initState})
        })

    }

    return ( 
        <div className="mt-20 bg-sb-03 border-2">
            <div className="mb-2 ml-2 font-extrabold text-orange-500">Reply Input</div>
            <div>
                <div className="ml-2 font-bold">Title</div> 

                <input type="text" name="reply" value={reply.reply}
                onChange={handleChange}
                className="border-2 m-2 w-96"
                ></input>
            </div>

            {/* <div>
                <div className="ml-2 font-bold">Writer</div>
                
                <input type="text" name="replyer" value={reply.replyer}
                onChange={handleChange}
                className="border-2 m-2 w-96"
                ></input> 
            </div> */}

            <div>
                <button 
                className="border-2 mt-2 mb-2 p-1 ml-2 rounded-md bg-blue-600  text-white"
                onClick={handleClickRegister}
                >
                    Save</button>
            </div>
        </div>
     );
}
 
export default ReplyInput;