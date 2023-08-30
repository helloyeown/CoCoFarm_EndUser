import { useParams } from "react-router-dom"
import useQueryObj from "../../../hooks/consumers/useQueryObj"
import useQueryObjs from "../../../hooks/farmers/useQueryObj"
import FarmerListReadComponent from "../../../components/consumer/FarmerListReadComponent"
import SampleNav from "../../../layout/consumernav/SampleNav"
import FooterComponent from "../../../components/consumer/FooterComponent"
import { useState } from "react"
import FarmerHomeComponent from "../../../components/farmers/FarmerHomeComponent"
import FarmerProfileComponent from "../../../components/consumer/FarmerProfileComponent"
import FarmerBoardComponent from "../../../components/farmers/FarmerBoardComponent"
import ConsumerTopNav from "../../../layouts/farmers/nav/ConsumerTopNav"

const FarmerListReadPage = () => {

    const {queryObj, moveList2} = useQueryObj()
    const [refresh, setRefresh] = useState(false)
    const {queryObjs, setSearch, moveRead} = useQueryObjs()
      
    const {mno} = useParams()

    console.log(mno)
    console.log(queryObj)
    console.log(useQueryObj)
    console.log("==========----------==========")


    const refreshFn = () => {

        let data = !refresh
        setRefresh({...data})

    }


    //페이지 번호 받는
    const movePage = (num) => {
        
        console.log("SUbPage_Num: " + num)
        queryObj.page = num
        setSearch({...queryObj})
    }


    return ( 

        <div className="container mx-[auto] w-[1280px]">
            <div>
                {/* <SampleNav></SampleNav> */}
                <ConsumerTopNav></ConsumerTopNav>
            </div>
            <div className="font-size-16px text-center mt-5 mb-9">
                FARMER
            </div>

      <div className="h-[300px]">
        <FarmerProfileComponent mno={mno}></FarmerProfileComponent>
      </div>
            
            <div className="m-auto">
                <FarmerListReadComponent 
                    mno={mno}
                    moveList2={moveList2}
                    refreshFn={refreshFn}
                ></FarmerListReadComponent>
            </div>


            <div>
                <FarmerBoardComponent
                queryObj={queryObjs}
                movePage={movePage}
                moveRead={moveRead}
                >          
                </FarmerBoardComponent>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    );
}
 
export default FarmerListReadPage;