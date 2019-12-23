

 import { LOADSORTDATA } from "./action-types"
 import { Map } from "immutable"
 const defaultState = Map({
   list:{}
 })

 export default (state=defaultState ,action)=>{
   switch(action.type){
      case LOADSORTDATA :
       return state.set("list",action.data)
      default:
        return state
      }
}