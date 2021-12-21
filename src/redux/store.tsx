import { createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootreducer from "./rootReducer";
import thunk from 'redux-thunk'






const store= createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)))


export default store

