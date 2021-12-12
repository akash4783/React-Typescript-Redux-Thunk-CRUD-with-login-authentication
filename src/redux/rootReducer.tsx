import Emplyoeereducer from "./reducer";


import { combineReducers } from "redux";



const rootreducer = combineReducers({
    data: Emplyoeereducer
})
export default rootreducer