import { useEffect } from "react";
import { getList } from "../../api/FarmerAPI";

const FarmerListComponent = ({queryObj, movePage, moveRead}) => {

  
  useEffect(() => {

    getList().then(data => {
      console.log(data)
    })

  } , []);
  
  return ( 

    <div className="justify-center items-center container mt-3">


    </div>

   );
}
 
export default FarmerListComponent;