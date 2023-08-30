import axios from "axios"
import { url } from "./FarmerAPI"
// const url = 'http://192.168.0.74:8080'


//좋아요 누르기
export const addBoardLike = async (bno , params) => {

  const header = {
    headers: {
        "Content-Type": "multipart/form-data",
    }
  }

  const formdata = new FormData()
  formdata.append("email" , params.email)


  alert(params.email)

  
  const res = await axios.post(`${url}/api/boardfavorite/${bno}`,formdata,header)

  return res.data
  
}

//좋아요 취소
export const deleteBoardLike = async (bno , params) => {


  const email = params.email;
  alert(bno)
  alert(email)

  const res = await axios.delete(`${url}/api/boardfavorite/${bno}/${email}`)

  return res.data

}


export const getBoardLikeCheck = async (bno , params) => {

  const res = await axios.get(`${url}/api/boardfavorite/${bno}/check?email=${params.email}`)

  return res.data
  
}


// import axios from "axios"
// const url = 'http://192.168.0.48:8080'

// ///////////////////////////////게시판 좋아요////////////////////////////////////////////

// export const addBoardLike = async (tomno , params) => {
  
//   const res = await axios.post(`${url}/api/boardfavorite/${tomno}` , params)

//   return res.data
  
// }

// export const deleteBoardLike = async (tomno , params) => {
  
//   const res = await axios.delete(`${url}/api/boardfavorite/${tomno}` , params)

//   return res.data
  
// }




//////////////////////////////////구매 게시판 좋아요/////////////////////////////////////////

export const addProductLike = async (pno , params) => {

  const header = {
    headers: {
        "Content-Type": "multipart/form-data",
    }
  }
  
  console.log("tomno================================")
  console.log(pno)
  console.log("params================================")
  console.log(params)

  const formdata = new FormData()
  formdata.append("email" , params.email)
    
  const res = await axios.post(`${url}/api/productfavorite/${pno}` , formdata , header)

  return res.data
  
}

export const deleteProductLike = async (pno , params) => {

  const email = params.email;
  alert(email)
  
  const res = await axios.delete(`${url}/api/productfavorite/${pno}/${email}`)

  return res.data
  
}

export const countProductLike = async (pno , params) => {

  
  const res = await axios.get(`${url}/api/productfavorite/${pno}` , params)

  return res.data
  
}

export const ListProductLike = async (tomno , params) => {
  
  const res = await axios.get(`${url}/api/productfavorite/${tomno}` , params)

  return res.data
  
}

export const getProductLikeCheck = async (tomno , params) => {

  const res = await axios.get(`${url}/api/productfavorite/${tomno}/check?email=${params.email}`)

  return res.data
  
}

