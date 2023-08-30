import { useNavigate } from "react-router-dom";
import FarmerQARegistComponent from "../../components/farmers/FarmerQARegistComponent";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerQARegistPage = () => {

  const navigate = useNavigate()

    const moveList = () => {

        navigate("/farmer/qa")
    }

  return ( 

    <div className="container mx-[auto] w-[1280px] ">
      <div>
        <TopNav></TopNav>
      </div>

      <div className="text-2xl m-4">Q&A 등록 페이지</div>
            
        <FarmerQARegistComponent moveList={moveList}></FarmerQARegistComponent>

    </div>
   );
}
 
export default FarmerQARegistPage;