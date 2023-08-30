import { useParams } from "react-router-dom"

import FooterComponent from "../../../components/consumer/FooterComponent"
import useQueryObj from "../../../hooks/consumers/useQueryObj"
import QNAModifyComponent from "../../../components/consumer/QNAModifyComponent"
import SampleLayout from "../../../layout/consumer/SampleLayout"


const QNAReadPage = () => {

    const {queryObj, moveDelete, moveList, moveRead} = useQueryObj()
    const {bno} = useParams()

    console.log("QAMODI bno:" + bno)
    console.log(queryObj)
    console.log(useQueryObj)
    console.log("==========----------==========")

    return ( 
        
        <div className="container mx-[auto] w-[1280px]">
            <div>
                <SampleLayout></SampleLayout>
            </div>
            <div className="text-xl mt-5">
                MODIFY PAGE
            </div>
            
            <QNAModifyComponent 
            bno={bno}
            moveList={moveList}
            moveRead={moveRead}
            moveDelete={moveDelete}>
            </QNAModifyComponent>
            <FooterComponent></FooterComponent>
        </div>
  
     );

}
 
export default QNAReadPage;