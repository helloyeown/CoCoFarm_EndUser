import FarmerDiaryComponent from "../../components/farmers/FarmerDiaryComponent";
import FarmerPageComponent from "../../components/farmers/FarmerPageComponent";
import FarmerSearchComponent from "../../components/farmers/FarmerSearchComponent";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerDiaryPage = () => {

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

    <div className="container mx-[auto] w-[1280px]">
      
      <div>
        <TopNav></TopNav>
      </div>

      <div>
        <FarmerSearchComponent
        moveSearch={moveSearch}
        queryObj={queryObj}
        chgSize={chgSize}
        addUrl={{url: "/farmer/diary/regist"}}
        >

        </FarmerSearchComponent>
      </div>

      

      <div>
        <FarmerDiaryComponent
        queryObj={queryObj}
        movePage={movePage}
        moveRead={moveRead}
        >
        </FarmerDiaryComponent>
      </div>


    </div>

   );
}
 
export default FarmerDiaryPage;