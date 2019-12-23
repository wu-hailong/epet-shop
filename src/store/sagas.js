import { takeEvery } from 'redux-saga/effects'

import { sagas as home } from  "pages/home/"
import { sagas as goodslist } from  "pages/goodslist/"
const { GETDSELECTIONATA ,GETCATEGORYDATA,GETBOOKDATA}  = home.types
const { GETSORTDATA } = goodslist.types

function* sagas() {
  yield takeEvery(GETDSELECTIONATA , home.selectionAction);
  yield takeEvery(GETCATEGORYDATA , home.categoryAction);
  yield takeEvery(GETBOOKDATA , home.bookAction);
  yield takeEvery(GETSORTDATA , goodslist.sortAction);
}

export default sagas;