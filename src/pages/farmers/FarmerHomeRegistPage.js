import FarmerBoardRegistComponent from "../../components/farmers/FarmerBoardRegistComponent";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerHomeRegistPage = () => {



  
  return (
    <div className="container mx-[auto] w-[1280px] ">
      <div>
        <TopNav></TopNav>
      </div>
      
      <FarmerBoardRegistComponent></FarmerBoardRegistComponent>
    </div>
    );
}
 
export default FarmerHomeRegistPage;