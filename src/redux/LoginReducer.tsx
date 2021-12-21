import * as types from './actiontype'

const initialState={
    users:[],
    user:{},
    loading:false,
    isSuccess:false
}


const LoginReducer = (state=initialState,action:any)=>{
    switch (action.type) {
       
        case types.ADD_LOGIN_ADMIN:
        
            return{
                ...state,
                loading:false,
                isSuccess:true
            }
        default:
           return state
    }
}

export default LoginReducer