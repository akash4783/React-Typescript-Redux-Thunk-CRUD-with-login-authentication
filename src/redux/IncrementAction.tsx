import * as types from "../redux/actiontype"

export const getIncrement = (users:any)=>({
    type:types.GET_EMPLOYEE_INCREMENT,
    payload:users
})

export const addIncrement=()=>({
    type:types.ADD_EMPLOYEE_INCREMENT
})

export const deleteIncrement=()=>({
    type:types.DELETE_EMPLOYEE_INCREMENT
    
    })
export const getsingleIncrement=(user:any)=>({
    type:types.GET_SINGLE_EMPLOYEE_INCREMENT,
    payload:user
})

export const IncrementUpdate =(users:any)=>({
    type:types.UPDATE_EMPLOYEE_INCREMENT,
    payload:users
    
})