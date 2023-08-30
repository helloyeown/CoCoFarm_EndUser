import { useEffect, useState } from "react"
import { getConsumerList, getList } from "../../api/FarmerAPI"


const initState = {
  dtoList:[],
  end:0,
  start:0,
  next:false,
  prev:false,
  pageNums:[],
  page:0,
  size:0,
  requestDTO:null,
  regDate:''
}

const FarmerTestPage = () => {

  const [data, setListData] = useState(initState)

  useEffect(() => {

    getList(queryObj).then(data => {
      console.log("FarmerListComponent22: " + data)
      setListData(data) 
    })

    
  },[queryObj])

  const filteredData = data.filter(item => item.cateno === 5);


  return ( 
    <div>

      {/* <table>
      <tbody>
          {listData.dtoList.map( ({mno, email, intro, nickname}) => 
            <tr className="border-b-2 border-gray-300 text-center h-12"
                key={mno}
                onClick={() => moveRead(mno)}
            >
              <td>{mno}</td>
              <td className="text-left hover:underline hover:cursor-pointer">{email}</td>
              <td>{intro}</td>
              <td>{nickname}</td>
              
            </tr>
          
          )}
        </tbody>
      </table> */}

{filteredData.map(item => {
        return (
          <div key={item.mno}>
            <h2>{item.email}</h2>
            <p>{item.intro}</p>
          </div>
        );
      })}

    </div>
   );
}
 
export default FarmerTestPage;