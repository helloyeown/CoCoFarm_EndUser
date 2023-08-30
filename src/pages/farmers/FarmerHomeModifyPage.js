import { useParams } from "react-router-dom";
import FarmerBoardModifyComponent from "../../components/farmers/FarmerBoardModifyComponent";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerHomeModifyPage = () => {

  const {pno} = useParams()
  return ( 
    <div className="container mx-[auto] w-[1280px] ">

      <div>
      <TopNav></TopNav> 
      </div>

      <div className="mt-5">
        <FarmerBoardModifyComponent pno={pno}></FarmerBoardModifyComponent>
      </div>

    </div>
   );
}
 
export default FarmerHomeModifyPage;