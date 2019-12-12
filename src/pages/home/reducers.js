import { LOADSELECTIONDATA ,LOADCATEGORYDATA} from "./action-types"

const defaultState = {
  list:{},
  category:{}
}

const loadSelectionData = (state=defaultState , action)=>{
  switch(action.type){
      case LOADSELECTIONDATA:
        return {
          list:action.data
        }
      default:
        return state
  }
}
const loadCategoryData = (state=defaultState , action)=>{
  switch(action.type){
      case LOADCATEGORYDATA:
        return {
          category:action.data
        }
      default:
        return state
  }
}
export {
  loadSelectionData,
  loadCategoryData
}