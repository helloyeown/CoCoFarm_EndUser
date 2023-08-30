import { useEffect, useState } from "react"
import { getOne } from "../../api/FarmerAPI"
import TopNav from "../../layouts/farmers/nav/TopNav"
import { useParams } from "react-router"
import useQueryObj from "../../hooks/farmers/useQueryObj"
import FarmerQAReadComponent from "../../components/farmers/FarmerQAReadComponent"
import FarmerDiaryReadComponent from "../../components/farmers/FarmerDiaryReadComponent"
import ReplyWrapper from "../../components/farmers/reply/ReplyWrapper"


const FarmerDiaryReadPage = () => {
  
  
  const {queryObj, moveDiaryList} = useQueryObj()
  const {bno} = useParams()
  const [refresh, setRefresh] = useState(false)
  
  console.log(bno)
  console.log(queryObj)

  //차은우 추가
  const refreshFn = () => {

    let data = !refresh
    setRefresh({...data})

  }

  return ( 
    
    
    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>
      
      <div className="mt-5">
        <FarmerDiaryReadComponent bno={bno} refreshFn={refreshFn} ></FarmerDiaryReadComponent>
        {/* <button 
            className="border-2 w-20 mt-4 p-2 rounded-md bg-gray-600 text-white "
            onClick={() => moveDiaryList()}>List</button> */}
      </div>

      <div className="-mt-16 ml-6">
        <ReplyWrapper bno={bno}></ReplyWrapper>
      </div>

      
    </div>

   );
}
 
export default FarmerDiaryReadPage;