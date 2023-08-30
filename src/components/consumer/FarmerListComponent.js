import { useEffect, useState } from "react";
import { getFarmerList } from "../../api/ConsumerAPI";
import PageComponent from "./PageComponent";
import { getFarmerOne, getList } from "../../api/FarmerAPI";
import ListPageComponent from "../common/ListPageComponent";


const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null
}
let idx = 1;

const FarmerListComponent = ({queryObj, movePage, moveRead2}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {

      getFarmerList(queryObj).then(data => {
            console.log("====================")
            console.log(data)
            setListData({...data})
        })

    }, [queryObj])

    return ( 

        <div>
            <ul className="flex flex-wrap mt-5 border border-[#ddd] ">
          {listData.dtoList.map( ({mno, email, nickname, intro, fname}) => 
            <li
              className="w-1/2 p-10 font-semibold border-b odd:border-r font-size-10px font-serif text-center"
              key={mno}
              onClick={() => moveRead2(mno)}
            >
            <div className="text-center">
                <div className="font-size-9px">{mno}</div>
                <div className="text-center w-[430px] h-[230px] mx-auto">
                  <img className="inline-block w-full h-full" src={`http://192.168.0.48/s_files_f${idx++}.jpg`}/>
                </div>
            </div>
            <div className="text-center">
                <div className="text-xl mt-4">
                  {nickname}
                </div>
                <div className="text-center text-2xl mt-4 text-green-600">
                  {intro}
                  <div className="text-xl font-normal">
                    {/* <span className="mr-5">ReviewAvg: ({reviewAvg})</span>
                    <span>ReviewCnt: ({reviewCnt})</span> */}
                  </div>
                </div>
            </div>
            </li>
          )}
        </ul>

        <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>
            

 )}
export default FarmerListComponent;
