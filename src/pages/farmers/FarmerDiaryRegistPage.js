import FarmerDiaryRegistComponent from "../../components/farmers/FarmerDiaryRegistComponent";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerDiaryRegistPage = () => {
  return ( 
    <div className="container mx-[auto] w-[1280px] ">

      <div>
        <TopNav></TopNav>
      </div>

      <div>
        <FarmerDiaryRegistComponent></FarmerDiaryRegistComponent>
      </div>
      
    </div>
   );
}
 
export default FarmerDiaryRegistPage;