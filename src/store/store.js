import postReducer from "./reducers/postReducer"
import { combineReducers, createStore, applyMiddleware } from "redux"

import thunk from "redux-thunk"

export const rootReducer = combineReducers({
    postReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))