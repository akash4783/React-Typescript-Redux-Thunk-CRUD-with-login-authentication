import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteusers, loadusers } from '../redux/action';
import "../assets/css/admin.css"
import "../assets/css/sb-admin-2.min.css"
import { Button } from 'react-bootstrap';
export default function EmployeeHome (){
    
    const dispatch = useDispatch()

const {users} = useSelector((state:any)=>state.data)

console.log(users)

    useEffect(()=>{
        dispatch(loadusers())
    },[])
    const handledelete=(id:any)=>{
        if(window.confirm("Are sure to Delete")){
            dispatch(deleteusers(id))
        }
    }

    return(

        <div className="content-center h100 w70 mr-auto ml-auto">
            <div className="container-fluid">

<h1 className="h3 mb-2 text-gray-800">Tables</h1>
<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">DataTables Examples</h6>
    </div>
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
                <tbody>
                    {users.map((item:any,id:any)=>{
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.street}</td>
                                <td>{item.address.street}</td>
                                <td>
                                <Button onClick={()=>{handledelete(item.id)}} variant={"danger"}>DELETE</Button>
                                <Button>Edit</Button>
                                <Button variant={"warning"}>View</Button></td>

                            </tr>
                        )
                    })}
                 

                </tbody>
            </table>
        </div>
    </div>
</div>

</div>


</div>
           

    )

}
