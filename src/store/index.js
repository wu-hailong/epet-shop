import { createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import sagas from "./sagas"
import reducers from "./reducers"
import Immutable from "immutable"

const rootState = Immutable.Map()

const sageMiddleware = createSagaMiddleware()

const store = createStore(
    reducers ,
    rootState,
    applyMiddleware(sageMiddleware)
)

sageMiddleware.run(sagas)

export default store