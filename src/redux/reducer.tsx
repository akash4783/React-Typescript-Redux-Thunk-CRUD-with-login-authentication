import * as types from './actiontype'

const initialState={
    users:[],
    user:{},
    loading:false
}


const Emplyoeereducer = (state=initialState,action:any)=>{
    switch (action.type) {
        case types.GET_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
       
        case types.ADD_USERS:{
            return{
                ...state,
                loading:false

            }

            }
            
            case types.DELETE_USERS:{
                return{
                    ...state,
                    loading:false
    
                }
    
                }
         
        
            
    
        default:
           return state
    }
}

export default Emplyoeereducer