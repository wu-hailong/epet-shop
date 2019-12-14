import { LOADSELECTIONDATA ,LOADCATEGORYDATA ,LOADBOOKDATA} from "./action-types"

const defaultState = {
  list:{},
  category:{},
  bookData:{}
}

export default (state=defaultState , action)=>{
  switch(action.type){
      case LOADSELECTIONDATA:
        return {
          ...state,
          list:action.data
        }
      case LOADCATEGORYDATA:
        return {
          ...state,
          category:action.data
        }
      case LOADBOOKDATA:
        return {
          ...state,
          bookData:action.data
        }
      default:
        return state
  }
}