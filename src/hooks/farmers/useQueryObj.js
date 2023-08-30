import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"


const checkNull = (obj) => {

  const result = {}

  for (const attr in obj) {
    const attrName = attr
    const attrValue = obj[attr]

    if (attrValue && attrValue !== 'null') {
      result[attrName] = attrValue
    }
  }

  return result
}

const useQueryObj = () => {
  //쿼리스트링 처리
  const [search, setSearch] = useSearchParams()
  const navigate = useNavigate()

  // console.log("search: " + search)

  //page, size 값이 없으면 초기값 설정
  const page = search.get("page") || 1
  const size = search.get("size") || 10
  const type = search.get("type")
  const keyword = search.get("keyword")

  //object로 묶는다
  const queryObj = checkNull({ page, size, type, keyword})

  console.log("queryObj: " + queryObj)

  const moveList = () => {
    const queryString = createSearchParams(queryObj).toString()

    navigate(`/farmer/qa?${queryString}`) 

    console.log("queryString..." + queryString)
  }

  const moveHomeList = () => {
    const queryString = createSearchParams(queryObj).toString()

    navigate(`/farmer/home?${queryString}`) 

    console.log("home queryString..." + queryString)
  }
  

  const moveDiaryList = () => {
    const queryString = createSearchParams(queryObj).toString()

    navigate(`/farmer/diary`) 

    console.log("queryString..." + queryString)
  }

  const moveBoardList = () => {
    const queryString = createSearchParams(queryObj).toString()

    navigate(`/farmer/home`) 

    console.log("queryString..." + queryString)
  }
  

  const moveRead = (bno) => {
    
    console.log("moveRead: " + bno)

    const queryString = createSearchParams(queryObj).toString()

    navigate(`read/${bno}?${queryString}`)

  }

  const moveProductRead = (pno) => {
    
    console.log("moveRead: " + pno)

    const queryString = createSearchParams(queryObj).toString()

    navigate(`/farmer/home/read/${pno}?${queryString}`)

  }

  const moveModify = (bno) => {

    console.log("moveModify: " + bno)

    const queryString = createSearchParams(queryObj).toString()

    navigate(`../farmer/qa/modify/${bno}?${queryString}`)

}

  const moveProductModify = (pno) => {

    console.log("moveProductModify: " + pno)

    const queryString = createSearchParams(queryObj).toString()

    navigate(`../farmer/home/modify/${pno}?${queryString}`)

  }

  return {queryObj, setSearch, moveList, moveRead, moveDiaryList, 
    moveBoardList, moveModify, moveHomeList, moveProductModify, moveProductRead}
}

export default useQueryObj;