import FarmerBoardComponent from "../../components/farmers/FarmerBoardComponent";
import FarmerDiarySearchComponent from "../../components/farmers/FarmerDiarySearchComponent";
import FarmerHomeComponent from "../../components/farmers/FarmerHomeComponent";
import FarmerSearchComponent from "../../components/farmers/FarmerSearchComponent";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerHomePage = () => {

  const {queryObj, setSearch, moveRead} = useQueryObj()

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
  
  return ( 

    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>

      <div>
        <FarmerHomeComponent ></FarmerHomeComponent>
      </div>

      <div>
        <FarmerDiarySearchComponent
        moveSearch={moveSearch}
        queryObj={queryObj}
        chgSize={chgSize}
        addUrl={{url: "/farmer/home/regist"}} 
        ></FarmerDiarySearchComponent>
      </div>

      <div>
        <FarmerBoardComponent 
        queryObj={queryObj}
        movePage={movePage}
        moveRead={moveRead}
        >          
        </FarmerBoardComponent>
      </div>


    </div>
    

   );
}
 
export default FarmerHomePage;