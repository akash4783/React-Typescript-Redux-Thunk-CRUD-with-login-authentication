import { createStore,applyMiddleware} from "redux";
// import createSagaMiddleware from "@redux-saga/core"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootreducer from "./rootReducer";
import thunk from 'redux-thunk'

// const sagamiddleware = createSagaMiddleware()





const store= createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)))


export default store

