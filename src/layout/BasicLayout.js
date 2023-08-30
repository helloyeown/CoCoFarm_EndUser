
import BodyNav from "./consumernav/BodyNav";
import SampleNav from "./consumernav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-[auto] w-[1280px]">
            
            <div>
                <SampleNav></SampleNav>
            </div>
            <div>
                <div className="p-4 pb-0 pt-10">
                    {children}
                </div>
            </div>
        </div>
        

        

    );
}
 
export default BasicLayout;