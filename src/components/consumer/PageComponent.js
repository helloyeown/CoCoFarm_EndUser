

const PageComponent = ({movePage, start, end, prev, next, pageNums, page}) => {

    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }
    
    return ( 

        <div className="flex m-4 p-2 mb justify-center">
            <ul className="flex">
                {prev ? 
                    <li 
                    className="m-2 p-2 border-2 font-bold hover:cursor-pointer"
                    onClick={() => handleClickPage(start -1)}>
                        PREV
                    </li>:<></>}

                {pageNums.map(num => 
                    <li 
                    className="m-2 p-2 border-2 font-bold hover:cursor-pointer" 
                    onClick={() => handleClickPage(num)}
                    key={num}>
                        {page === num ? <span className="">
                                            {num}
                                        </span> : <span>{num}</span>}
                        {/* {num} */}
                    </li>)}

                {next ? 
                    <li 
                    className="m-2 p-2 border-2 font-bold hover:cursor-pointer"
                    onClick={() => handleClickPage(end +1)}>
                        NEXT
                    </li>:<></>}
            </ul>
        </div>

    );

}
 
export default PageComponent;