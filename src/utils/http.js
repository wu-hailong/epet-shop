import axios from "axios"

export const get = ({url , params})=>{
  return axios({ url, params})
  .then((result)=>{
    return result.data
  })
  .catch((err)=>{
    return err.message
  })
}
export const post = ({url , data})=>{
  return axios({ url, data, method:"post"})
  .then((result)=>{
    return result.data
  })
  .catch((err)=>{
    return err.message
  })
}