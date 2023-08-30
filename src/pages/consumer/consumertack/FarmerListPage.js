import FarmerListComponent from "../../../components/consumer/FarmerListComponent";
import FooterComponent from "../../../components/consumer/FooterComponent";
import SearchComponent from "../../../components/consumer/SearchComponent";
import useQueryObj from "../../../hooks/consumers/useQueryObj";
import SampleNav from "../../../layout/consumernav/SampleNav";
import ConsumerTopNav from "../../../layouts/farmers/nav/ConsumerTopNav";


const FarmerListPage = () => {

    const {queryObj, setSearch, moveRead2} = useQueryObj()
    console.log("queryObj: " + queryObj)

    const movePage = (num) => {
        
        console.log("NUM: " + num)
        console.log(useQueryObj)
        console.log("----------==========----------")
        queryObj.page = num
        setSearch({...queryObj})
    }

    const moveSearch = (type, keyword) => {
    
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword
        setSearch({...queryObj})
    }

    return ( 

        <div className="container mx-[auto] w-[1280px] ">
            {/* <SampleNav></SampleNav> */}
            <ConsumerTopNav></ConsumerTopNav>
            <h2 className="font-size-16px font-serif text-center p-12">FARMER LIST</h2>
            <div>
                <FarmerListComponent
                queryObj={queryObj}
                movePage={movePage}
                moveRead2={moveRead2}>
                </FarmerListComponent>
            </div>
            <div>
                <SearchComponent
                moveSearch={moveSearch}
                queryObj={queryObj}>
                </SearchComponent>
            </div>

            <FooterComponent></FooterComponent>
        </div>

     );
     
}
 
export default FarmerListPage;