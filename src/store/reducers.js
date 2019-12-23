// import { combineReducers } from "redux"

import { reducers as home } from "pages/home/"
import { reducers as goodslist } from "pages/goodslist/"
import { combineReducers } from "redux-immutable"

export default combineReducers({
   home,
   goodslist
})


