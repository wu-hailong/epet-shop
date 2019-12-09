import { createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import sagas from "./sagas"
import reducers from "./reducers"

const sageMiddleware = createSagaMiddleware()

const store = createStore(reducers , applyMiddleware(sageMiddleware))

sageMiddleware.run(sagas)

export default store