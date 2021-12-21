import * as types from "./actiontype"


export const getPayRolldetails = (users:any)=>({
    type:types.GET_EMPLOYEE_PAYROLL,
    payload:users
})


 export const payrollAdded=()=>({
    type:types.ADD_EMPLOYEE_PAYROLL
})

export const payRollDeleted =()=>({
    type:types.DELETE_EMPLOYEE_PAYROLL,
    
})
export const payRollUpdate =(users:any)=>({
    type:types.UPDATE_EMPLOYEE_PAYROLL,
    payload:users
    
})


export const getPayroll=(user:any)=>({
    type:types.GET_SINGLE_EMPLOYEE_PAYROLL,
    payload:user
})
