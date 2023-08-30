import { useEffect, useState } from "react";
import { getOne } from "../../api/FarmerAPI";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import { useParams } from "react-router";

  const initState = {
    bno:0,
    title:'',
    content:'',
    writer:'',
    reg:'',
    modDate:'',
    nickname:'',
    email:''
    
  }

  const FarmerQAReadComponent = () => {

    const {bno} = useParams()
    const {queryObj, moveList, moveModify} = useQueryObj()
    

    const [board, setBoard] = useState(initState)
    const [files, setFiles] = useState([]);

    useEffect(() => {

      getOne(bno).then(data => {
        setBoard(data)

        const fileList = data.fname ? data.fname.split(',') : [];       
        setFiles(fileList);

      })
    },[bno])

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
        <div className="text-orange-500 font-bold">Email</div>
        <div>{board.email}</div>
    </div>

    <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">RegDate</div>
        <div>{board.reg}</div>
    </div>

    <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">ModDate</div>
        <div>{board.modDate}</div>
    </div>

    <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">Title</div>
        <div>{board.title}</div>
    </div>

    <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">Content</div>
        <div>{board.content}</div>
    </div>

    {/* <div className="m-2 p-2 border-2">
      <div className="text-orange-500 font-bold">상품사진</div>                 
      <div>
        <ul className="list-none">
          {files.map((filelist, idx) =>                     
            <li key={idx}
                className="mb-2"
            >
              <img src={`http://192.168.0.74/${filelist}`} alt='ddd' className="w-[300px] h-[300px]"></img>
            </li>
          )}
        </ul>
      </div>
    </div> */}

        <div className="flex">
        <button         
        onClick={() => moveModify(board.bno)}
        className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
        >Modify
        </button>

       <button 
        onClick={moveList}
        className="bg-green-600 rounded-md w-20 p-2 m-2 ml-5 text-white"
        >List
        </button>
      </div>
         
      

  </div>
      

    
   );
}
 
export default FarmerQAReadComponent;