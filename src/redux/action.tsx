import * as types from "./actiontype"
import axios from "axios"


export const getemplyoeedetails = (users: any) => ({
    type: types.GET_USERS,
    payload: users
})


export const userAdded = () => ({
    type: types.ADD_USERS
})

export const userdeleted = () => ({
    type: types.DELETE_USERS,

})
export const getSingleUser = (user: any) => ({
    type: types.GET_SINGLE_USER,
    payload: user
})
export const userUpdated = (users: any) => ({
    type: types.UPDATE_USERS,
    payload: users
})

const Token = localStorage.getItem("AccessToken")
export const loadusers = () => {
    return function (dispatch: any) {
        axios.get("http://192.168.10.167:5000/employee",{
            headers: { authorization: `Bearer ${Token}`}
            
        }).then((response: any) => {
            // console.log(response)

            dispatch(getemplyoeedetails(response.data))
        }).catch((err: any) => console.log(err))
    }
}



export const adduser = (user: any) => {
    return function (dispatch: any) {
        axios.post(`http://192.168.10.167:5000/employee`, user,{
            headers: { authorization: `Bearer ${Token}` }
            
        }).then((response) => {

            console.log(">>>>>>>>>>>>>>>", response.data)
            dispatch(userAdded())
            dispatch(loadusers())
        }).catch((err) => console.log('sjdfhksdhflajdsh  ', err))
    }
}


export const deleteusers = (id: any) => {
    return function (dispatch: any) {
        axios.delete(`http://192.168.10.167:5000/employee/${id}`,{
            headers: { authorization: `Bearer ${Token}` }
            
        }).then((response) => {
            dispatch(userdeleted())
            dispatch(loadusers())
        }).catch((err) => console.log(err))
    }
}



export const getSingleEmployee = (id: any) => {
    return function (dispatch: any) {
        axios.get(`http://192.168.10.167:5000/employee/${id}`,{
            headers: { authorization: `Bearer ${Token}` }
            
        }).then((response) => {
          
            dispatch(getSingleUser(response.data))

        }).catch((err) => console.log(err))
    }
}


export const updateUser = (id: any, info: any) => {
    delete info.id;
    delete info.createdAt;
    delete info.deletedAt
    delete info.updatedAt
    return function (dispatch: any) {
        axios.patch(`http://192.168.10.167:5000/employee/${id}`, info,{
            headers: { authorization: `Bearer ${Token}` }
            
        }).then((response) => {
            console.log(response.data);

            dispatch(userUpdated(response.data))

            dispatch(loadusers())

        }).catch((err) => {
            
            console.log(err)
        }
        )
    }

}

