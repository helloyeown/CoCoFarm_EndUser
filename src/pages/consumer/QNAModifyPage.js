import { useParams } from "react-router-dom"


import FooterComponent from "../../components/consumer/FooterComponent"
import useQueryObj from "../../hooks/consumers/useQueryObj"
import SampleNav from "../../layout/consumernav/SampleNav"
import QNAModifyComponent from "../../components/consumer/QNAModifyComponent"


const QNAReadPage = () => {

    const {queryObj, moveDelete, moveList} = useQueryObj()
    const {bno} = useParams()

    console.log(bno)
    console.log(queryObj)
    console.log(useQueryObj)
    console.log("==========----------==========")

    return ( 
        
        <div className="container mx-[auto] w-[1280px]">
            <div>
                <SampleNav></SampleNav>
            </div>
            <div className="text-xl mt-5">
                MODIFY PAGE
            </div>
            
            <QNAModifyComponent
                bno={bno}
                moveList={moveList}
                moveDelete={moveDelete}
            ></QNAModifyComponent>
            <FooterComponent></FooterComponent>
        </div>
  
     );

}
 
export default QNAReadPage;
