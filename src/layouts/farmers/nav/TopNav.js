import { Link, useNavigate } from "react-router-dom";
import farmIcon1 from "../../../public/cocofarm6.png"
import LoginNav from "./LoginNav";
import FarmerSiginComponent from "../../../components/farmers/FarmerSigninComponent";
import { useDispatch } from "react-redux";
import { requestLogout } from "../../../reducers/loginSlice";

const TopNav = ({hide}) => {
  const dispatch = useDispatch();
  const nav = useNavigate()

  const logout = () => {
      console.log(11111111)
      dispatch(requestLogout())
      nav("/")   
  }

  return ( 

    <div className="flex container h-[70px] text-black font-bold border-b-2 mt-2 ">

      <div className="flex justify-between">

        <div className="w-[200px]  justify-center flex">
          <Link to={"/"}>
            <img className="h-[68px]" alt="cocofarm" src={farmIcon1} />
          </Link>
        </div>

        <div className="w-[800px]  flex justify-center">

          <div className="m-5 mb-3 mt-auto text-xl hover:underline hover:scale-125">
            <Link to={"/farmer/home"}>Home</Link>
          </div>

          <div className="m-5 ml-20 mb-3 mt-auto text-xl hover:underline hover:scale-125">
            <Link to={"/farmer/diary"}>Diary</Link>
          </div>

          <div className="m-5 ml-20 mb-3 mt-auto text-xl hover:underline hover:scale-125">
            <Link to={"/farmer/qa"}>Q&A</Link>
          </div>
          {/* onClick={() => hide} */}
          <div  className="m-5 ml-20 mb-3 mt-auto text-xl hover:underline hover:scale-125">
            <Link to={"/farmer/subscriberlist"}>Subscriber</Link>
          </div>

        </div>

      </div>
      
      {/* <Link to="/">
            <button 
            className="border-gray-400 m-3 mt-7 p-1 ml-32 border-2 rounded-md
            hover:bg-black hover:text-white text-center text-sm">
            LogOut
            </button>
      </Link> */}

      <button 
        className="m-5 rounded-md hover:bg-black hover:text-white border-2 text-center text-sm"
        onClick={() => logout()}
        >
          LogOut
      </button>

    </div>

   );
}
 
export default TopNav;