import axios from "axios"

export const get = ({url , params})=>{
  return axios({ url, params})
  .then((result)=>{
    return result.data.datas
  })
  .catch((err)=>{
    return err.message
  })
}