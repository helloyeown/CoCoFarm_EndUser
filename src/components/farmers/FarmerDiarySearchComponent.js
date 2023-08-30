import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FarmerDiarySearchComponent = ( {moveSearch, queryObj, chgSize , hide, addUrl}) => {

  const[searchObj, setSearchObj] = useState({type:'', keyword:''})
  const[changeSize, setChangeSize] = useState({size: 10})

  // 랜더링 완료시 queryObj 바뀌면 내용물을 변경
  useEffect(() => {

    searchObj.type = queryObj.type || ''
    searchObj.keyword = queryObj.keyword || ''
    changeSize.size = queryObj.size || 10

    setSearchObj({...searchObj})
    setChangeSize({...changeSize})
  }, [queryObj])

  const handleSize = (e) => {

    // changeSize.size = e.target.vlaue
    // chgSize(changeSize.size)

    const newSize = e.target.value
    setChangeSize({...changeSize, size: newSize})
    chgSize(newSize)

  }

  console.log("changeSize: " + changeSize.size)
  console.log("SearchComponent==queryObj" + queryObj)

  return ( 

    <div className="items-center justify-center flex container mt-5">

      {/* <Link to="/farmer/qa/regist"> */}
      { hide ? <></> : 
        <button 
        className="border-2 m-2 p-2 w-16 rounded-md bg-lime-400 text-white"
        onClick={() => window.location.href = addUrl.url}
      > 
      ADD            
      </button>

      }
      {/* </Link> */}
            
        <select 
        className="border-2 m-2 p-2 " 
        value={searchObj.type}
        onChange={ e => {
            searchObj.type = e.target.value
            setSearchObj({...searchObj})
        }}
        >

          <option value={''}>---</option>
          <option value={'n'}>상품명</option>
          <option value={'d'}>상품설명</option>
          <option value={'e'}>이메일</option>
          <option value={'m'}>닉네임</option>          
            
        </select>
        
        <input 
        type="text" 
        className="rounded-sm border-2 p-2"
        value={searchObj.keyword}
        onChange={ e => {
            searchObj.keyword = e.target.value
            setSearchObj({...searchObj})}}
        ></input>
        
        <button 
        className="border-2 p-2 w-22 hover:bg-black hover:text-white"
        onClick={ e => moveSearch(searchObj.type, searchObj.keyword)}
        
        > SEARCH
        
        </button>

        
        <select className="border-2 h-10 w-20 ml-20"
            value={chgSize.size}
            onChange={e => handleSize(e)}                
        >
            <option value={10}>---</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={50}>50</option>

        </select>

    </div>
   );
}
 
export default FarmerDiarySearchComponent;