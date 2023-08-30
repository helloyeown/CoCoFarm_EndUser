import { useEffect, useState } from "react"
import { getCunsumerList} from "../../api/ConsumerAPI"
import ListPageComponent from "../common/ListPageComponent"
import { isContentEditable } from "@testing-library/user-event/dist/utils"
import PageComponent from "./PageComponent"


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


const QNAComponent = ({queryObj, movePage, moveRead, moveRegist}) => {

    const [listData, setListData] = useState(initState)

    queryObj.cateno = 1

    useEffect(() => {
        getCunsumerList(queryObj).then(data => {
            console.log("----------=====----------")
            console.log(data)
            setListData({...data})
        })
    }, [queryObj])

    return ( 

        <div>
            <table className="w-[1200px] items-center justify-center container">
                <thead>
                    <tr className="border-b-2 text-center h-12 font-serif">
                        <td className="w-1/12">NO.</td>
                        <td className="w-2/12">TITLE</td>
                        <td className="w-4/12">CONTENT</td>
                        <td className="w-1/12">NICKNAME</td>
                        <td className="w-1/12">REGDATE</td>
                        <td className="w-1/12">댓글수</td>
                                 
                    </tr>
                </thead>

                <tbody>
                    {listData.dtoList.map(({bno,title,nickname,replyCount,regDate,rcnt,content}) => 
                        <tr 
                        className="border-b-2 h-20 text-center"
                        key={bno}
                        onClick={() => moveRead(bno)}>
                            <td>{bno}</td>
                            <td className="text-left hover:underline hover:cursor-pointer">
                                {title}
                            </td>
                            <td>{content}</td>
                            <td>{nickname}</td>
                            <td>{regDate}</td>
                            <td>{rcnt}</td>  
                        </tr>
                    )}
                </tbody>
            </table>

            <div>
                <button 
                className="border-2 m-2 p-2 font-bold"
                onClick={moveRegist}>
                    글쓰기
                </button>
            </div>

            <PageComponent movePage={movePage} {...listData}></PageComponent>

        </div>
        
     );

}
 
export default QNAComponent;