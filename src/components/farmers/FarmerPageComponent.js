

const FarmerPageComponent = ({ movePage, start, end, prev, next, pageNums, page }) => {

  const handleClickPage = (pageNum) => {
    movePage(pageNum)
  }


  return (
    
    <div className="flex mb-5 justify-center">
      <ul className="flex">

        {prev ? <li
                className="m-2 p-2 bg-sb-02 border-2  
                hover:underline hover:cursor-pointer rounded-md"
                onClick={() => handleClickPage(start - 1)}        
        
        > PREV </li> : <></>}

        {pageNums.map(num => 
          <li
            className="m-2 p-2 w-9 text-center border-2
                       font-bold hover:underline hover:cursor-pointer rounded-md"
            onClick={() => handleClickPage(num)}
            key={num}
          >
            {page === num ? <span className="underline">{num}</span> : <span>{num}</span>}

          </li>)}

          {next ? <li
            className="m-2 p-2 bg-sb-02 border-2   
            hover:underline hover:cursor-pointer rounded-md"
            onClick={() => handleClickPage(end + 1)}

          > NEXT </li> : <></>}

      </ul>

    </div>
    
   );
}
 
export default FarmerPageComponent;