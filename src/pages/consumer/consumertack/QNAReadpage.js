import { useParams } from "react-router-dom"

import QNAReadComponent from "../../../components/consumer/QNAReadComponent"
import FooterComponent from "../../../components/consumer/FooterComponent"
import useQueryObj from "../../../hooks/consumers/useQueryObj"
// import SampleNav from "../../layout/consumernav/SampleNav"
import SampleLayout from "../../../layout/consumer/SampleLayout"
import ReplyWrapper from "../../../components/farmers/reply/ReplyWrapper"
import ConsumerTopNav from "../../../layouts/farmers/nav/ConsumerTopNav"


const QNAReadPage = () => {

    const {queryObj, moveDelete, moveList, moveModify} = useQueryObj()
    const {bno} = useParams()

    console.log(bno)
    console.log(queryObj)
    console.log(useQueryObj)
    console.log("==========----------==========")

    return ( 
        
        <div className="container mx-[auto] w-[1280px]">
            <div>
                {/* <SampleLayout></SampleLayout> */}
                <ConsumerTopNav></ConsumerTopNav>
            </div>
            <div className="text-xl mt-5 ml-10 mb-3 text-green-600">
                문의게시판
            </div>

            <div className="m-auto">
                <QNAReadComponent
                    bno={bno}
                    moveList={moveList}
                    moveModify={moveModify}
                    moveDelete={moveDelete}
                ></QNAReadComponent>
            </div>
            <div>
                <ReplyWrapper bno={bno}></ReplyWrapper>
            </div>

                <FooterComponent></FooterComponent>
            
        </div>

     );

}
 
export default QNAReadPage;