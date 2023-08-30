import { Link } from "react-router-dom";

const Accountcomponent = () => {
  return ( 
    <div className="container">
      <div className="flex-wrap mt-8 mb-60">
                <ul className="text-center font-sans font-size-11px">
                    <li className="mb-5">
                    <Link to="/consumer/modify">회원정보</Link></li>
                    <li>구독리스트</li>
                </ul>
      </div>
    </div>
  );
}
 
export default Accountcomponent;