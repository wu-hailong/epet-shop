import { put } from 'redux-saga/effects'

import * as types from "./action-types"

import { get } from "utils/http"

function* loadData(action) {
  // console.log(action)
  let { url, params } = action
  try {
    let result = yield get({
      url,
      params
    })
    // console.log(result)
    yield put({type:types.LOADDATA,data:result})
  } catch (e) {

  }
}

export {
  types,
  loadData as action //将loadData命名为action抛出
}