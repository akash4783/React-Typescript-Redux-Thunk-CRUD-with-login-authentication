import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteincrement, loadIncrementList } from '../../api/incrementAPI';
import {Button} from "react-bootstrap"
import { useNavigate } from 'react-router';
import moment from "moment"
import HOCAuth from '../../Auth/Hoc';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
 function IncrementList (){
    const [currentSalary, setcurrentSalary] = useState('')
    const [appraisalAmount, setappraisalAmount] = useState("")
    const[appraisalAt,setappraisalAt]=useState("")
    const[employeeId,setemployeeId] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
const user =useSelector((state:any)=>state.incrementdata.users)
console.log(user)
let data1:any

    if(user){
        data1 = user
   }


useEffect(()=>{
    dispatch(loadIncrementList())


},[])
const handleDelete=(id:any)=>{
    if(window.confirm("Are sure to Delete")){
        dispatch(deleteincrement(id))
    }
}

const handleView=(id:any)=>{
    const FinalData = user.data.find((item:any)=>item.id===id)
    setcurrentSalary(FinalData.currentSalary)
    setappraisalAmount(FinalData.appraisalAmount)
    let newDate =  moment.utc(FinalData.creditedAt).format('YYYY-MM-DD');
    setappraisalAt(newDate)
    setemployeeId(FinalData.id)


}
    return(
        <HOCAuth>

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
                    <th>Sr No</th>
                    <th>Current Salary</th>
                    <th>Appraisal Amount</th>
                    <th>Appraisal Date</th>
                    <th>Action</th>
                 
                </tr>
            </thead>
            <tfoot>
                <tr> <th>Sr No</th>
                    <th>Current Salary</th>
                    <th>Appraisal Amount</th>
                    <th>Appraisal Date</th>
                    <th>Action</th>
                </tr>
            </tfoot>
            <tbody>
                {data1?.data?.map((item:any,id:any)=>{
                        var date = new Date(item.appraisalDate);
                        var newDate = date.toISOString().substring(0, 10);
                    return (
                        <tr key={id}>
                            <td>{id+1}</td>
                            <td>{item.currentSalary}</td>
                            <td>{item.appraisalAmount}</td>
                            <td>{newDate }</td>
                         

                            <td>
                            <DeleteIcon style={{color:"red"}} onClick={() => { handleDelete(item.id) }}></DeleteIcon>
                            <EditIcon style={{color:"blue"}}   onClick={() => { navigate(`/editincrement/${item.id}`) }}></EditIcon>
                            <PreviewIcon style={{color:"grey"}} data-toggle="modal" data-target="#exampleModalCenter" onClick={() => { handleView(item.id) }}></PreviewIcon>
                            
                             {/* <Button onClick={()=>{handleDelete(item.id)}} variant={"danger"}>DELETE</Button>
                            <Button onClick={()=>{navigate(`/editincrement/${item.id}`) }}>Edit</Button>
                            <Button onClick={()=>{handleView(item.id)}} type="button"  data-toggle="modal" data-target="#exampleModalCenter" variant={"warning"}>View</Button> */}
                            </td> 

                        </tr>
                    )
                })}
             

            </tbody>

<div className="modal fade " id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Payroll Data</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
            <label className="col-form-label">Current Salary</label>
            <input  type="text" defaultValue={currentSalary}  className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label className="col-form-label">Appraisal Amount</label>
            <input  type="text" defaultValue={appraisalAmount} className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label className="col-form-label">Appraisal Date</label>
            <input  type="text" defaultValue={appraisalAt} className="form-control" id="recipient-name"/>
          </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
     </table>
    </div>
</div>
</div>

</div>


</div>
</HOCAuth>
    )

}
export default IncrementList