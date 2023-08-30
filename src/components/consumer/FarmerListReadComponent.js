import { useEffect, useState } from "react";
import useQueryObj from "../../hooks/consumers/useQueryObj";
import { getFarmerOne } from "../../api/ConsumerAPI";
import { useParams } from "react-router-dom";
import { getCookies } from "../../util/cookieUtil";
import { addGudoc, deleteGudoc, getGudocCheck } from "../../api/GudocAPI";


const initState = {
    mno:0,
    email:'',
    nickname:'',
    rolename:'',
    profile:'',
    regDate:'',
    modDate:'',
}


const FarmerListReadComponent = ({moveList2,refreshFn}) => {

    //const {mno} = useParams()

    // const {queryObj, moveList2} = useQueryObj()
    const [board, setBoard] = useState(initState)
    const [subscriptionYn , setSubscriptionYn] = useState(0);

    const cookie = getCookies("login");

    //구독을 하는 소비자
    const frommno = cookie.mno
    //구독을 당하는 재배자
    const {mno} = useParams()

    console.log("frommno")
    console.log(frommno)
    console.log("tomno")
    console.log(mno)

    useEffect(() => {

        getFarmerOne(mno).then(data => {
            console.log("==========-----==========")
            console.log(data)
            setBoard(data)
        })

        //구독자 pk
        board.mno = frommno
        //구독자의 이메일
        board.email = cookie.email
        setBoard(board)

        //구독자인지 아닌지 판단
        getGudocCheck(mno,board).then(data => {
            console.log("==========--getGudocCheck---==========")
            console.log(data)
            // alert(data)
            setSubscriptionYn(data)
        })

    }, [mno,subscriptionYn,refreshFn])

    //구독버튼 누르면
    const subscription = () => { 

        //구독자 pk
        board.mno = frommno
        //구독자의 이메일
        board.email = cookie.email
        setBoard(board)

        console.log("==========--subscription111---==========")
        addGudoc(mno,board).then(data => {
            console.log("==========--subscription222---==========")
            setBoard({...data})
            refreshFn()
        })
    }

    //구독 취소 버튼
    const subscriptiondCancel = () => {

        //구독자 pk
        board.mno = frommno
        //구독자의 이메일
        board.email = cookie.email
        setBoard(board)

        deleteGudoc(mno,board).then(data => {
            console.log("==========--subscriptiondCancel---==========")
            setBoard({...data})
            refreshFn()
        })
    }

    return ( 
        
        <div className="items-center justify-center container">
            <table className="w-[1200px] items-center m-auto">
                <thead>
                    <tr className="h-12 font-medium text-center">
                        <td className="border-2 font-medium">NO</td>
                        <td className="border-2">Email</td>
                        <td className="border-2">Nickname</td>
                        <td className="border-2">Rolename</td>
                        <td className="border-2">FILE</td>
                    </tr>
                </thead>
                
                <tbody>
                    <tr className="h-12">
                        <td className="border-2">{board.mno}</td>
                        <td className="border-2">{board.email}</td>
                        <td className="border-2">{board.nickname}</td>
                        <td className="border-2">{board.rolename}</td>
                        <td className="border-2">{board.profile}</td>
                    </tr>
                </tbody>

            </table>
            <div className="flex justify-around font-size-16px font-serif text-center mt-5 mb-9">
                    <button 
                    onClick={subscriptionYn === 0 ? () => subscription() : () => subscriptiondCancel()}
                    className="w-20 border-2">
                        {subscriptionYn === 0 ? <span>구독하기</span> : <span className="bg-gray-100 text-gray-500">구독중</span>}     
                    </button>
                    <button 
                    onClick={moveList2}
                    className="w-20 border-2">
                        LIST
                    </button>
                </div>  
        </div>
        
    );
    
}
 
export default FarmerListReadComponent;