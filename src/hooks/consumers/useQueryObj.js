import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"


const checkNull = (obj) => {

    const result = {}

    for(const attr in obj) {
        const attrName = attr
        const attrValue = obj[attr]

        if(attrValue && attrValue !== 'null') {
            result[attrName] = attrValue
        }
    }

    return result

}


const useQueryObj = () => {

    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate()

    console.log(search)
    
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({page, size, type, keyword})

    console.log("queryObj: " + queryObj)

    const moveList = () => {

        const queryString = createSearchParams(queryObj).toString()

        navigate(`/consumer/qnapage?${queryString}`)
        
    }

    const moveList2 = () => {

        const queryString = createSearchParams(queryObj).toString()

        navigate(`/consumer/farmerlist?${queryString}`)

    }

    const moveRead = (bno) => {

        console.log("moveRead: " + bno)

        const queryString = createSearchParams(queryObj).toString()

        navigate(`/consumer/qnapage/read/${bno}?${queryString}`)

    }

    const moveRead2 = (bno) => {

        console.log("moveRead2: " + bno)

        const queryString = createSearchParams(queryObj).toString()

        navigate(`/consumer/farmerlistpage/read/${bno}?${queryString}`)

    }
    
    const moveModify = (bno) => {

        console.log("moveModify: " + bno)
    
        const queryString = createSearchParams(queryObj).toString()
    
        navigate(`/consumer/qnapage/read/modify/${bno}?${queryString}`)
    
    }
    //회원정보수정
    const modifyMember = (mno) => {

        console.log("modifyMember: " + mno)
    
        const queryString = createSearchParams(queryObj).toString()
    
        navigate(`/mypage`)
    
    }

    const moveRegist = () => {

        console.log("moveRegist: ")
    
        const queryString = createSearchParams(queryObj).toString()
    
        navigate(`/consumer/qnapage/regist`)
    
    }

    
    return {queryObj, setSearch, moveList, moveList2, moveRead, moveRead2, moveModify ,moveRegist, modifyMember}

}
 
export default useQueryObj;