import * as types from '../redux/actiontype'


const initialState={
    users:[],
    user:{},
    loading:false
}


const IncrementReducer =(state=initialState,action:any)=>{

    switch (action.type) {
        case types.GET_EMPLOYEE_INCREMENT:
        case types.UPDATE_EMPLOYEE_INCREMENT:
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        case types.DELETE_EMPLOYEE_INCREMENT:
            return {
                ...state,
                loading:false
            } 
            
        case types.GET_SINGLE_EMPLOYEE_INCREMENT:
            return {
                ...state,
                user:action.payload,
                loading:false
                    }
    
        default:
          return  state;
    }

}

export default IncrementReducer