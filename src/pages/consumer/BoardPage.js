import ConsumerListComponent from "../../components/consumer/ConsumerListComponent";
import BodyNav from "../../layout/consumernav/BodyNav";
import SampleNav from "../../layout/consumernav/SampleNav";

const BoardPage = () => {

    

    return ( 
        <div className="container mx-[auto] w-[1280px] ">
            <div>
                <SampleNav></SampleNav>
            </div>
            <div>
                <BodyNav></BodyNav>
            </div>
            <div>
                <ConsumerListComponent></ConsumerListComponent>
            </div>
        
        </div>
    );

}
export default BoardPage;