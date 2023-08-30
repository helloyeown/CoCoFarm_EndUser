import { modifyMember, postLogin } from "../../../api/LoginApi";
import FooterComponent from "../../../components/consumer/FooterComponent";
import ModifyComponent from "../../../components/consumer/ModifyComponent";
import useQueryObj from "../../../hooks/consumers/useQueryObj";
import SampleNav from "../../../layout/consumernav/SampleNav";

const ModifyPage = () => {

  const {modifyMember} = useQueryObj()


  return ( 
    <div className="container mx-[auto] w-[1280px] ">
      <div>
            <SampleNav></SampleNav>
            <h2 className="font-size-16px font-serif text-center p-9">MODIFY</h2>
            <div className=" flex justify-center mb-48">
                <ModifyComponent>
                  modifyMember={modifyMember}
                  
                </ModifyComponent>
            </div>
            
            
            <FooterComponent></FooterComponent>
        </div>

    </div>
  );
}
 
export default ModifyPage;