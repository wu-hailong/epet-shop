import { LOADSELECTIONDATA ,LOADCATEGORYDATA ,LOADBOOKDATA} from "./action-types"
import { Map } from "immutable"
const defaultState = Map({
  list:{},
  category:{},
  bookData:{}
})

export default (state=defaultState , action)=>{
  switch(action.type){
      case LOADSELECTIONDATA:
        return state.set("list",action.data)
      case LOADCATEGORYDATA:
        return state.set("category",action.data)
      case LOADBOOKDATA:
        return state.set("bookData",action.data)
      default:
        return state
  }
}