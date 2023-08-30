import { Link } from "react-router-dom";
import { modifyMember, postLogin } from "../../api/LoginApi";
import useQueryObj from "../../hooks/consumers/useQueryObj";

const ModifyComponent = () => {

  const {modifyMember} = useQueryObj()

  return ( 
    <div className=" flex items-center justify-center w-full">
      <div className="bg-white p-8 rounded-md  w-[500px] ">
        <h2 className="font-17px font-sans mb-4 text-center mb-10">회원 기본정보</h2>
          <div className="mb-4">
            <input type="text" id="name" name="name" placeholder="이름" className="w-full p-3 h-10 border-b-2 border-black"/>
          </div>
          <div className="mb-4">
            <input type="text" id="address" name="address" placeholder="주소" className="w-full p-3 h-10 border-b-2 border-black"/>
          </div>
          <div className="mb-20">
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="전화번호" className="w-full p-3 h-10 border-b-2 border-black"/>
          </div>
          <div className="font-sans items-center">
            <div className="flex justify-between w-full">
              <button onClick={modifyMember} className="w-20 border-2">
                수정
              </button>
              <button className="w-20 border-2">
                <Link to={"/mypage"}>취소</Link>
              </button>
            </div>
          </div>
        
      </div>
    </div>
  );
}
 
export default ModifyComponent;