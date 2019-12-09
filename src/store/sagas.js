import { takeEvery } from 'redux-saga/effects'

import { sagas as home } from  "pages/home/"

const { GETDATA }  = home.types

function* sagas() {
  yield takeEvery(GETDATA , home.action);
}

export default sagas;