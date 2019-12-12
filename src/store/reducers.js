import { combineReducers } from "redux"

import { reducers as home } from "pages/home/"
export default combineReducers({
    selection : home.loadSelectionData,
    category : home.loadCategoryData,

})


