import { useEffect, useState } from "react"
import { getFarmerOne } from "../../api/FarmerAPI"


const initState = {
  mno:0,
  email:'',
  intro:'',
  nickname:'',
  roleName:''


}

const FarmerSubReadComponent = ({mno}) => {

  const [board, setBoard] = useState(initState)

  useEffect(() => {

    getFarmerOne(mno).then(data => {
      setBoard(data)

      console.log("Farmer ReadCom data:"+data)
    })
  },[mno])


  return ( 

    <div className="items-center justify-center container flex">

      
      <table className="w-[1200px] items-center justify-center">

        <thead className="">
          <tr className="bg-gray-200">
              <td className="border-2 font-medium w-32 text-center ">No</td>
              <td className="border-2">{board.mno}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">Nickname</td>
              <td className="border-2">{board.nickname}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">Email</td>
              <td className="border-2">{board.email}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">Role_name</td>
              <td className="border-2">{board.roleName}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium h-40 text-center">Intro</td>
              <td className="border-2">{board.intro}</td>
          </tr>

        </thead>
    
      </table>

    </div>
   );
}
 
export default FarmerSubReadComponent;