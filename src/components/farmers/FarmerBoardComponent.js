import { useEffect } from "react"
import { useState } from "react"
import { getList } from "../../api/productAPISong"
import FarmerPageComponent from "./FarmerPageComponent"
import { Link } from "react-router-dom"
import useQueryObj from "../../hooks/farmers/useQueryObj"

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

const FarmerBoardComponent = ({queryObj, movePage, moveRead}) => {

  const [listData, setListData] = useState(initState)  
  

  useEffect(() => {

    // queryObj.cateno = 3

    getList(queryObj).then(data => {
      console.log("FarmBoard Component: " + data.dtoList)
      setListData(data) 
      
    })
  },[queryObj])


  return ( 

    <div className="h-[1200px] mt-3">

        {/* 임시버튼 */}
        {/* <div className="text-3xl">
          <button><Link to={"/farmer/home/register"}>REG</Link></button>
        </div> */}

      <ul className="flex flex-wrap container justify-center">      
        
        {listData.dtoList.map(({pno, pdesc, pname, price, fname}) => (
          <li className="h-[300px] w-1/6 m-2 p-2 rounded-md border-2 border-gray-400" 
            key={pno}
            onClick={() => moveRead(pno)}
          >

          <div className="justify-center">

            <div className="hover:cursor-pointer w-36 h-32 mx-auto mt-4">
              <img src={`http://192.168.0.74/s_${fname}`} 
                alt="defaultImg" className="w-36 h-32"></img>
                {/* <img src={`http:192.168.0.74/${fname}`} 
                alt="defaultImg" className="w-36 h-32"></img> */}
            </div>

            <div className="justify-center mt-5">
              <div className="text-center text-gray-500">No. {pno}</div>
              <div className="text-center text-black font-bold hover:cursor-pointer">{pname}</div>
              <div className="text-center text-gray-500">{pdesc}</div>
              
            </div>

          </div>

            <div className="justify-center whitespace-pre-line mt-5" >
              
              <div className="font-bold hover:cursor-pointer mt-1 truncate text-center text-red-600">
                {(price+'').replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원'} <br></br>
                
              </div>                
              
            </div>

          </li>

        ))}      

      </ul>
        
      <FarmerPageComponent movePage={movePage}{...listData}></FarmerPageComponent>
      

    </div>

  );
}

export default FarmerBoardComponent;