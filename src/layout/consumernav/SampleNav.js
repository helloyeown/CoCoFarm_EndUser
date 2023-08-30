import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { requestLogout } from "../../reducers/loginSlice";


const SampleNav = () => {

    const dispatch = useDispatch();
    const nav = useNavigate()
  
    const logout = () => {
        alert("11")
        dispatch(requestLogout())
        // alert("22")
        nav("/")   
    }

    return ( 
        <div className="relative flex justify-between items-center bg-white pt-12 pb-12">
            
            <div className="flex items-center">
                <div  className='font-size-16px font-serif mr-5'>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div  className='font-size-16px font-serif'>
                    <Link to="/consumer/qnapage">QnA</Link>
                </div>
            </div>
            <div className='font-size-16px font-serif text-center' >
                <Link to="/consumer/farmerlistpage">COCOFARM</Link>
            </div>
            
            <div>
                <Link to="/mypage">
                    <button 
                    className="
                    hover:bg-black hover:text-white text-center text-sm mr-5">
                    ACCOUNT
                    </button>
                </Link>



                {/* <Link to="/">
                    <button 
                    className=" 
                    hover:bg-black hover:text-white text-center text-sm">
                    LOGOUT
                    </button>
                </Link> */}
                <button 
                    className="m-5 rounded-md hover:bg-white text-center text-sm"
                    onClick={() => logout()}
                    >
                    LogOut
                </button>




            </div>
        </div>
    );
}
 
export default SampleNav;