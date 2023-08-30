import axios from "axios"
import { url } from "./FarmerAPI"
// const url = 'http://192.168.0.74:8080'

//구독 하기
export const addGudoc = async (tomno , params) => {

  const header = {
    headers: {
        "Content-Type": "multipart/form-data",
    }
  }

  const formdata = new FormData()

  formdata.append("email" , params.email)
  
  const res = await axios.post(`${url}/api/sub/${tomno}`,formdata,header)

  return res.data
  
}

//구독 취소
export const deleteGudoc = async (tomno , params) => {

  const email = encodeURIComponent(params.email);

  const res = await axios.delete(`${url}/api/sub/${tomno}/${email}` )

  return res.data

}

//구독자 목록
export const getListGudoc = async (tomno , params) => {

  const res = await axios.get(`${url}/api/sub/${tomno}/list` , params)

  return res.data

}

//구독여부 체크
export const getGudocCheck = async (tomno , params) => {

  const res = await axios.get(`${url}/api/sub/${tomno}/check?email=${params.email}`)
  
  return res.data

}

//구독자수 체크
export const getGudocCount = async (tomno) => {

  const res = await axios.get(`${url}/api/sub/${tomno}`)

  return res.data

}





