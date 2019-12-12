import { put } from 'redux-saga/effects'

import * as types from "./action-types"

import { get } from "utils/http"

function* loadSelectionData(action) {
  // console.log(action)
  let { url, params } = action
  try {
    let result = yield get({
      url,
      params
    })
    // console.log(result)
    yield put({type:types.LOADSELECTIONDATA,data:result})

  } catch (e) {

  }
}

function* loadCategoryData(action) {
  // console.log(action)
  let { url, params } = action
  try {
    let result = yield get({
      url,
      params
    })
    // console.log(result)
    yield put({type:types.LOADCATEGORYDATA,data:result})

  } catch (e) {

  }
}

export {
  types,
  loadSelectionData as selectionAction, //将loadSelectionData命名为selectionAction抛出
  loadCategoryData as categoryAction
}