import axios from "axios"
import {getPayRolldetails, payRollDeleted,getPayroll, payrollAdded,payRollUpdate} from '../redux/payrollAction'

const Token = localStorage.getItem("AccessToken")
export const loadPayroll=()=>{
    return function (dispatch:any){
        axios.get("http://192.168.10.167:5000/payroll",{
            headers: { authorization: `Bearer ${Token}` }
            
        }).then((response:any)=>{
            console.log(response.data)
       
            dispatch(getPayRolldetails(response.data))
        }).catch((err:any)=> console.log(err))
    }
}



export const addpayroll=(user:any)=>{
    return function (dispatch:any){
        axios.post(`http://192.168.10.167:5000/payroll`,user,{
            headers: { authorization: `Bearer ${Token}` }
            
        }).then((response)=>{
            console.log(">>>>>>>>>>>>>>>",response.data)
            dispatch(payrollAdded())
            dispatch(loadPayroll())

           
        }).catch((err)=> console.log(err))
    }
}


export const deletPayroll=(id:any)=>{
    return function (dispatch:any){
        axios.delete(`http://192.168.10.167:5000/payroll/${id}`,{
            headers: { authorization:`Bearer ${Token}` }
            
        }).then((response)=>{
            dispatch(payRollDeleted())
            dispatch(loadPayroll())
        }).catch((err)=> console.log(err))
    }
}


export const getSinglePayroll=(id:any)=>{
    return function(dispatch:any){
        axios.get(`http://192.168.10.167:5000/payroll/${id}`,{
            headers: { authorization: `Bearer ${Token}`}
            
        }).then((response)=>{
            // console.log(response.data)
            dispatch(getPayroll(response.data))

        }).catch((err)=> console.log(err))
    }
}


export const updatedPayRoll = (id: any, info: any) => {
 
    
    return function (dispatch: any) {
        axios.patch(`http://192.168.10.167:5000/payroll/${id}`, info,{
            headers: { authorization: `Bearer ${Token}`}
            
        }).then((response) => {
            console.log(response.data);

            dispatch(payRollUpdate(response.data))

            dispatch(loadPayroll())

        }).catch((err) => {
            
            console.log(err)
        }
        )
    }

}