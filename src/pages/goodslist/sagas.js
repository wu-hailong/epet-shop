import { put } from "redux-saga/effects"

import * as types from "./action-types"

import { get } from "utils/http"

function * loadSortData (action){
  let { url , params } = action
  try {
    let result = yield get ({
      url,
      params
    })
    yield put({type:types.LOADSORTDATA,data:result})
  }catch(e){

  }
}

export {
  types,
  loadSortData as sortAction
}