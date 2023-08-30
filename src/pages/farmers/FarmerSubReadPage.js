import { useParams, useNavigate } from "react-router";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import TopNav from "../../layouts/farmers/nav/TopNav";
import FarmerSubReadComponent from "../../components/farmers/FarmerSubReadComponent";


const FarmerSubReadPage = () => {

  const {queryObj, moveList} = useQueryObj()
  const {mno} = useParams()
  const nav = useNavigate()

  console.log(mno)
  console.log(queryObj)

  return ( 

    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>

      <div className="text-xl mt-5 text-red-600">
        Subscriber Read Page
      </div>
      
      <div className="mt-5">
        <FarmerSubReadComponent mno={mno}></FarmerSubReadComponent>
        <button 
            className="border-2 w-20 mt-4 p-2 rounded-md bg-gray-600 text-white "
            onClick={() => nav("/farmer/subscriberlist")}>List</button>
      </div>

      
    </div>
   );
}
 
export default FarmerSubReadPage;