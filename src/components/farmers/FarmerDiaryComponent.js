import { useEffect, useState } from "react"

import { getList } from "../../api/FarmerAPI"
import FarmerPageComponent from "./FarmerPageComponent"


const initState = {
  dtoList:[],
  end:0,
  start:0,
  next:false,
  prev:false,
  pageNums:[],
  page:0,
  size:0,
  requestDTO:null,
  regDate:'',
  
}

const FarmerDiaryComponent = ({queryObj, movePage, moveRead}) => {

  const [listData, setListData] = useState(initState)

  let num = 1

  // Test (j1 project)
  useEffect(() => {

    queryObj.cateno = 2
    
    getList(queryObj).then(data => {
      console.log("Diary Component: " + data.dtoList[0])
      setListData(data)
    })

    
  },[queryObj])


  return ( 

    <div className="h-[1200px] mt-3">

      <ul className="flex flex-wrap container justify-center">      
        
        {listData.dtoList.map(({bno, title, regDate, content, fname}) => (
          <li className="h-[300px] w-1/6 m-2 p-2 rounded-md border-2 border-gray-400" 
              key={bno}
              onClick={() => moveRead(bno)}
          >

            <div className="justify-center">

              <div className="hover:cursor-pointer w-36 h-32 mx-auto">
                {/* <img src="https://media.istockphoto.com/id/184276818/ko/%EC%82%AC%EC%A7%84/%EB%A0%88%EB%93%9C-%EC%82%AC%EA%B3%BC%EB%82%98%EB%AC%B4.jpg?s=612x612&w=0&k=20&c=qe0XwDHYbQFgVaqM2unXZWVqI7kV2SSfXrCYaHsdmWM=" 
                  alt="defaultImg" className=""></img> */}
                {/* <img src={`http://192.168.0.74/s_${fname}`} 
                alt="defaultImg" className="w-36 h-32"></img> */}

                <img src={`http://192.168.0.74/s_files_f${num++}.jpg`} 
                alt="defaultImg" className="w-36 h-32"></img>
              </div>

              <div className="justify-center mt-3">
                <div className="text-center text-orange-400 hover:cursor-pointer mt-5">No.{bno}</div>
                <div className="text-center text-black font-bold hover:cursor-pointer mt-2">{title}</div>
                <div className="text-center text-gray-500 text-xs">{regDate}</div>               
              </div>

            </div>

            <div className="justify-center whitespace-pre-line bg-gray-100" >
              
              <div className="font-bold hover:cursor-pointer mt-1 truncate">
                {content} <br></br>

                
              </div>                
              
            </div>
            
          </li>

        ))}        
        
        <FarmerPageComponent movePage={movePage}{...listData}></FarmerPageComponent>

      </ul>


    </div>
   );
}
 
export default FarmerDiaryComponent;