import { useEffect, useState } from "react";
import FarmerPageComponent from "./FarmerPageComponent";
import { getConsumerList, getFarmerList, getList } from "../../api/FarmerAPI";


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
  regDate:''
}

const FarmerQAComponent = ({queryObj, movePage, moveRead}) => {

  const [listData, setListData] = useState(initState)

  // Test (j1 project)
  useEffect(() => {

    queryObj.cateno = 1

    getList(queryObj).then(data => {
      console.log("FarmerListComponent: " + data)
      setListData(data)
    })
  },[queryObj])


  return ( 

    <div className="justify-center items-center container mt-3">
      
      <table className="w-[1200px] items-center justify-center container">

        <thead>
          <tr className="border-b-2 border-gray-300 text-center h-12">
            <td className="w-1/12">No</td>
            <td className="w-7/12">Title</td>
            <td className="w-1/12">Nickname</td>
            <td className="w-2/12">RegDate</td>
            <td className="w-1/12">ReplyCnt</td>          
          </tr>
        </thead>

        <tbody>
          {listData.dtoList.map( ({bno,title,writer,regDate,replyCount,nickname,rcnt}) => 
            <tr className="border-b-2 border-gray-300 text-center h-12"
                key={bno}
                onClick={() => moveRead(bno)}
                
            >
              <td className="w-1/12">{bno}</td>
              <td className="w-7/12 text-left hover:underline hover:cursor-pointer">{title}</td>
              <td className="w-1/12">{nickname}</td>
              <td className="w-2/12">{regDate}</td>
              <td className="w-1/12">{rcnt}</td>
            </tr>
          
          )}
        </tbody>
      </table>

      <FarmerPageComponent movePage={movePage}{...listData}></FarmerPageComponent>

    </div>

   );
}
 
export default FarmerQAComponent;