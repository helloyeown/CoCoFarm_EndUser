const ListPageComponent = ({movePage, start, end, prev, next, pageNums, page}) => {

  const handleClickPage = (pageNum) => {
    movePage(pageNum)
  }

  return (
  <div className="flex mt-3 mb-3 justify-center">
    <ul className="flex">

      {prev ? <li
              className="m-2 bg-sb-02 
              hover:underline hover:cursor-pointer rounded-md"
              onClick={() => handleClickPage(start - 1)}        
      
      > PREV </li> : <></>}

      {pageNums.map(num => 
        <li
          className="m-2 w-9 text-center
                     font-bold hover:underline hover:cursor-pointer rounded-md"
          onClick={() => handleClickPage(num)}
          key={num}
        >
          {page === num ? <span className="underline">{num}</span> : <span>{num}</span>}

        </li>)}

        {next ? <li
          className="m-2 bg-sb-02   
          hover:underline hover:cursor-pointer rounded-md"
          onClick={() => handleClickPage(end + 1)}

        > NEXT </li> : <></>}

    </ul>

  </div>
  );
}

export default ListPageComponent;