import { useParams } from "react-router-dom"
import FarmerBoardReadComponent from "../../components/farmers/FarmerBoardReadComponent"
import useQueryObj from "../../hooks/farmers/useQueryObj"
import TopNav from "../../layouts/farmers/nav/TopNav"
import ReplyWrapper from "../../components/farmers/reply/ReplyWrapper"
import { useState } from "react"

const FarmerHomeReadPage = () => {  

  const {queryObj, moveBoardList} = useQueryObj()
  const {pno} = useParams()
  const [refresh, setRefresh] = useState(false)

  console.log(pno)
  console.log("Read Reply: "+ pno)
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
        <FarmerBoardReadComponent pno={pno} refreshFn={refreshFn}></FarmerBoardReadComponent>

      </div>

      {/* <div>
        <ReplyWrapper bno={bno}></ReplyWrapper>
      </div> */}

      
    </div>
   );
}
 
export default FarmerHomeReadPage;