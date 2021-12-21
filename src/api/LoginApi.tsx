import axios from "axios"
import { AddAdmin } from "../redux/LoginAction"



export const addLogin=(user:any)=>{
  
    return function (dispatch:any){
      
        axios.post(`http://192.168.10.167:5000/auth/login`,user).then((response)=>{

            localStorage.setItem('AccessToken', response.data.data.accessToken)
                dispatch(AddAdmin())
                
        }).catch((err)=> console.log(err))
    }
}