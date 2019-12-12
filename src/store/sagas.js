import { takeEvery } from 'redux-saga/effects'

import { sagas as home } from  "pages/home/"

const { GETDSELECTIONATA ,GETCATEGORYDATA}  = home.types

function* sagas() {
  yield takeEvery(GETDSELECTIONATA , home.selectionAction);
  yield takeEvery(GETCATEGORYDATA , home.categoryAction);
}

export default sagas;