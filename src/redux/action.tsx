import * as types from "./actiontype"
import axios from "axios"


export const getemplyoeedetails = (users:any)=>({
    type:types.GET_USERS,
    payload:users
})


const userAdded=()=>({
    type:types.ADD_USERS
})

const userdeleted =()=>({
    type:types.DELETE_USERS,
    
})

export const loadusers=()=>{
    return function (dispatch:any){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response:any)=>{
            console.log(">>>>>>",response.data)
            dispatch(getemplyoeedetails(response.data))
        }).catch((err:any)=> console.log(err))
    }
}




export const adduser=(user:any)=>{
    return function (dispatch:any){
        axios.post(`https://jsonplaceholder.typicode.com/users`,user).then((response)=>{
            console.log(">>>>>>>>>>>>>>>",response.data)
            dispatch(userAdded())

           
        }).catch((err)=> console.log(err))
    }
}


export const deleteusers=(id:any)=>{
    return function (dispatch:any){
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then((response)=>{
            dispatch(userdeleted())
            dispatch(loadusers())
        }).catch((err)=> console.log(err))
    }
}