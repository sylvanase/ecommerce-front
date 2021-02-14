/*
 * @Author: sylvanas
 * @Date: 2021-02-13 20:32:25
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-02-13 20:41:04
 * @Description: 
 */
import { applyMiddleware, createStore } from "redux"
import createRootReducer from "./reducers/index"
import { createHashHistory } from "history"
import { routerMiddleware } from "connected-react-router"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/index"
import { composeWithDevTools } from "redux-devtools-extension"

export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)


export default store
