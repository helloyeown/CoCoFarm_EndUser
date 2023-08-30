import { useState } from "react";
import FarmerSearchComponent from "../../components/farmers/FarmerSearchComponent";
import FarmerSubListComponent from "../../components/farmers/FarmerSubListComponent";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerSubListPage = () => {

  const {queryObj, setSearch, moveRead} = useQueryObj()

  //게시판 등록 버튼 유무
  const [addHide, setAddHide] = useState(false)

  console.log("queryObj: " + queryObj)

  //페이지 번호 받는
  const movePage = (num) => {
    
    console.log("SUbPage_Num: " + num)
    queryObj.page = num
    setSearch({...queryObj})
  }

  const moveSearch = (type, keyword) => {
    
    queryObj.page = 1
    queryObj.type = type
    queryObj.keyword = keyword

    setSearch({...queryObj})
  }

  const chgSize = (size) => {

    queryObj.size = size

    setSearch({...queryObj})

  }

  const hide =  () => {

    setAddHide(!addHide)

  }
  
  return ( 

    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>

      <div>
        <FarmerSearchComponent
        hide={hide}        
        moveSearch={moveSearch}
        queryObj={queryObj}
        chgSize={chgSize}
        ></FarmerSearchComponent>
      </div>

      <div className="mt-5">
        
        <FarmerSubListComponent
        queryObj={queryObj}
        movePage={movePage}
        moveRead={moveRead}
        ></FarmerSubListComponent>
      </div>

    </div>
  
   );
}
 
export default FarmerSubListPage;