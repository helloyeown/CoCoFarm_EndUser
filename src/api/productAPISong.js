import axios from "axios";
import { createSearchParams } from "react-router-dom";
import { url } from "./FarmerAPI";

// const url = 'http://192.168.0.74:8080'
// const url = 'http://192.168.0.48:8080'
// const url = 'http://localhost:8080'

export const getList = async (queryObj) => {

  const queryString = createSearchParams(queryObj).toString();

  const res = await axios.get(`${url}/api/products/list?${queryString}`)

  return res.data

}

export const readOne = async (pno) => {

  const res = await axios.get(`${url}/api/products/${pno}`)

  // console.log("proAPI read res: "+res)

  return res.data
}

export const registerProduct = async (FormData) =>{

  const header = {
      headers: {
              "Content-Type": "multipart/form-data",
      }
  }

  const res = await axios.post(`${url}/api/products/`, FormData, header)
  
  return res.data

}
// readOne으로 대체
// export const readProduct = async (pno) =>{

//   const res = await axios.get(`${url}/api/products/${pno}`)
//   return res.data

// }

  export const deleteProduct = async (pno) =>{

  const res = await axios.delete(`${url}/api/products/${pno}`)
  return res.data

}

export const putProduct = async (formData) => {

  const header = {
      headers: {
          "Content-Type": "multipart/form-data",
      }
  }

  const res = await axios.put(`${url}/api/products/`, formData, header)

  return res.data

}