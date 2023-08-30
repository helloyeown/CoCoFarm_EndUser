import { useEffect, useState } from "react";
import FarmerPageComponent from "./FarmerPageComponent";
import { getConsumerList } from "../../api/FarmerAPI";


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

const FarmerSubListComponent = ({queryObj, movePage, moveRead}) => {

  const [listData, setListData] = useState(initState)

  useEffect(() => {

    getConsumerList(queryObj).then(data => {
      console.log("FarmerListComponent22: " + data)
      setListData(data)
    })
  },[queryObj])

  // useEffect(() => {

  //   getFarmerList(queryObj).then(data => {
  //     console.log("FarmerListComponent: " + data)
  //     setListData(data)
  //   })
  // },[queryObj])

  return ( 

    <div className="justify-center items-center container mt-3">
     
      <table className="w-[100vw] items-center justify-center container">

        <thead>
          <tr className="border-b-2 border-gray-300 text-center h-12">
            <td className="w-1/12">Mno</td>
            <td className="w-4/12">Email</td>
            <td className="w-4/12">Intro</td>
            <td className="w-2/12">Nickname</td>
            {/* <td className="w-1/12">ReplyCnt</td>           */}
          </tr>
        </thead>

        <tbody>
          {listData.dtoList.map( ({mno, email, intro, nickname}) => 
            <tr className="border-b-2 border-gray-300 text-center h-12"
                key={mno}
                onClick={() => moveRead(mno)}
            >
              <td>{mno}</td>
              <td className="text-left hover:underline hover:cursor-pointer">{email}</td>
              <td>{intro}</td>
              <td>{nickname}</td>
              {/* <td>{rcnt}</td> */}
            </tr>
          
          )}
        </tbody>
      </table>

      <FarmerPageComponent movePage={movePage}{...listData}></FarmerPageComponent>

    </div>

   );
}
 
export default FarmerSubListComponent;