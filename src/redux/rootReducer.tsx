import Emplyoeereducer from "./EmployeeReducer";
import PayRollreducer from "./PayrollReducer";
import IncrementReducer from "./IncrementReducer";
import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";



const rootreducer = combineReducers({
    data: Emplyoeereducer,
    payRollData:PayRollreducer,
    incrementdata:IncrementReducer,
    loginData:LoginReducer
})
export default rootreducer