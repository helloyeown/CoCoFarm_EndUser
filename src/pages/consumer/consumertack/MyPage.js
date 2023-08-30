import Accountcomponent from "../../../components/consumer/AccountComponent";
import FooterComponent from "../../../components/consumer/FooterComponent";
import SampleLayout from "../../../layout/consumer/SampleLayout";
import SampleNav from "../../../layout/consumernav/SampleNav";
import ConsumerTopNav from "../../../layouts/farmers/nav/ConsumerTopNav";


const MyPage = () => {

    // const {user} = useUserState();

    return ( 

        <div className="container mx-[auto] w-[1280px] ">
            {/* <SampleNav></SampleNav> */}
            <ConsumerTopNav></ConsumerTopNav>
            <h2 className="font-size-16px font-serif text-center p-12">ACCOUNT</h2>
            <div>
                <Accountcomponent></Accountcomponent>
            </div>
            
            
            <FooterComponent></FooterComponent>
        </div>

     );
     
}
 
export default MyPage;