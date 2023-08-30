
import FooterComponent from "../../../components/consumer/FooterComponent";
import SampleNav from "../../../layout/consumernav/SampleNav";
import ConsumerTopNav from "../../../layouts/farmers/nav/ConsumerTopNav";

const AboutPage = () => {


  return ( 
    <div className="container mx-[auto] w-[1280px] ">
            {/* <SampleNav></SampleNav> */}

            <ConsumerTopNav></ConsumerTopNav>
          <h2 className="font-size-16px font-serif text-center p-12">COCOFARM</h2>
          <div className="container">
            <div className=" w-auto flex justify-center items-center">
              <img src="http://192.168.0.74/main/cocofarmmain.jpg" 
              className="w-auto h-auto justify-center flex">
              </img>
            </div>
          </div>
          <div className="text-left mt-16 font-size-11px font-sans">
            우리가 먹고 마시는 식재료가 <br/>
            어디에서 와서 어떻게 만들어지는 것인지, <br/>
            또 그것들을 나누는 것으로부터<br/>
            우리는 더 건강하고 지속 가능한 식생활을 즐기며<br/>
            더 건강한 세상을 만들어 나갈 수 있습니다.<br/>
          </div>
          <div className="text-right mt-24 mb-40 font-size-11px font-sans">
            대대로 그 땅에서 나서 오래도록 살아 내려오는 사람에겐<br/>
            그저 흔하게 매일 먹는 음식이겠으나,<br/>
            도시 위에서 앞으로만 질주하는 우리에게는 <br/>
            삶의 본질을 더듬게 하는 특별한 경험이 될 것입니다.
          </div>
            
          <FooterComponent></FooterComponent>
            
      </div>
   );
}
 
export default AboutPage;