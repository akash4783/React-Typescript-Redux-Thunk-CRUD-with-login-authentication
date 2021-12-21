import axios from "axios"
import { getIncrement,deleteIncrement, addIncrement, getsingleIncrement, IncrementUpdate } from "../redux/IncrementAction"

const Token = localStorage.getItem("AccessToken")
export const loadIncrementList=()=>{
    return function (dispatch:any){
        axios.get("http://192.168.10.167:5000/appraisal",{
            headers: { authorization: `Bearer ${Token}` }
            
        }).then((response)=>{
            
       
            dispatch(getIncrement(response.data))
        }).catch((err:any)=> console.log(err))
    }
}


export const addIncrementList=(user:any)=>{
    return function(dispatch:any){
        axios.post(`http://192.168.10.167:5000/appraisal`,user,{
            
                headers: { authorization: `Bearer ${Token}` }
                
            

        }).then((response)=>{
            // console.log("addIncre>>>>>",response.data)
        
           
            dispatch(addIncrement())
            dispatch(loadIncrementList())
        }).catch((err:any)=>console.log(err))
    }
}

export const deleteincrement=(id:any)=>{
    return function (dispatch:any){
        axios.delete(`http://192.168.10.167:5000/appraisal/${id}`,{
            headers: { authorization: `Bearer ${Token}` }
            
        }).then((response)=>{
       
            dispatch(deleteIncrement())
            dispatch(loadIncrementList())
        }).catch((err:any)=> console.log(err))
    }
}



export const getSingleIncrement=(id:any)=>{
    return function(dispatch:any){
        axios.get(`http://192.168.10.167:5000/appraisal/${id}`,{
            headers: { authorization: `Bearer ${Token}` }
            

        }).then((response)=>{
            console.log(response.data)
            dispatch(getsingleIncrement(response.data))

        }).catch((err)=> console.log(err))
    }
}



export const updatedIncrement = (id: any, info: any) => {
    return function (dispatch: any) {
        axios.patch(`http://192.168.10.167:5000/appraisal/${id}`, info,{
            headers: { authorization: `Bearer ${Token}` }
        }).then((response) => {
            console.log(response.data);

            dispatch(IncrementUpdate(response.data))

            dispatch(loadIncrementList())

        }).catch((err) => {
            
            console.log(err)
        }
        )
    }

}