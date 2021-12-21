import * as types from './actiontype'

const initialState={
    users:[],
    user:{},
    loading:false
}


const PayRollreducer = (state=initialState,action:any)=>{
    switch (action.type) {
        case types.GET_EMPLOYEE_PAYROLL:
        case types.UPDATE_EMPLOYEE_PAYROLL:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
       
        case types.ADD_EMPLOYEE_PAYROLL:
            return{
                ...state,
                loading:false

            }

            
            
        case types.DELETE_EMPLOYEE_PAYROLL:
            return{
                    ...state,
                    loading:false
    
                }
             
         
        case types.GET_SINGLE_EMPLOYEE_PAYROLL:
            return{
                    ...state,
                    user:action.payload,
                    loading:false
                }
            
    
        default:
           return state
    }
}

export default PayRollreducer