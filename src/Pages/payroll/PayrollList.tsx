import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loadPayroll,deletPayroll } from '../../api/payrollAPI';
import {Button} from "react-bootstrap"
import { useNavigate } from 'react-router';
import "../../assets/css/Modal.css"
import moment from "moment"
import AuthTokenHOC from '../../Auth/Hoc';
import HOCAuth from '../../Auth/Hoc';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function PayrollList (){

    const notify = () => toast("Employee Deleted Successfully!");
    const [creditedAt, setCreditedAt] = useState("")
    const[creditedAmount,setCreditedAmount]=useState("")
    const[employeeId,setEmployeeId]=useState("")

const navigate = useNavigate()

    const dispatch = useDispatch()

    const checkData = useSelector((state:any)=>state.payRollData.users)
    console.log("checkData",checkData)
    console.log(checkData)
    let m: any;
    if (checkData) {
        m = checkData;
        // console.log('++++++++++++++', m);
    }
    const handleDelete= (id:any)=>{
        if(window.confirm("Are sure to Delete")){
            dispatch(deletPayroll(id))
        
        }
        
    }
    
    const handleView=(id:any)=>{
        const finalData = checkData.data.find((item:any)=>item.id===id)
        let newDate =  moment.utc(finalData.creditedAt).format('YYYY-MM-DD');
        
        setCreditedAt(newDate)
        setCreditedAmount(finalData.creditedAmount)
        setEmployeeId(finalData.id)

    }
        useEffect(()=>{
            dispatch(loadPayroll())
        },[])
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
                    <th>Credited Amount</th>
                    <th>Credited At</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Sr No</th>
                    <th>Credited Amount</th>
                    <th>Credited At</th>
                    <th>Action</th>
                    
                </tr>
            </tfoot>
            <tbody>
                {m.data && m.data.map((item:any,id:any)=>{
                     var date = new Date(item.creditedAt);
                     var newDate = date.toISOString().substring(0, 10);
                    return (
                        <tr key={id}>
                            <td>{id+1}</td>
                            <td>{item.creditedAmount}</td>
                            <td>{ newDate}</td>
                            <td>
                            <DeleteIcon style={{color:"red"}} onClick={() => { handleDelete(item.id) }}></DeleteIcon>
                            <EditIcon style={{color:"blue"}}   onClick={() => { navigate(`/editpayrole/${item.id}`) }}></EditIcon>
                            <PreviewIcon style={{color:"grey"}} data-toggle="modal" data-target="#exampleModalCenter" onClick={() => { handleView(item.id) }}></PreviewIcon>
                            {/* <Button  onClick={()=>handleDelete(item.id)} variant={"danger"}>DELETE</Button>
                            <Button onClick={()=>{navigate(`/editpayrole/${item.id}`)}}>Edit</Button>
                            <Button onClick={()=>{handleView(item.id)}} type="button" variant={"warning"} data-toggle="modal" data-target="#exampleModalCenter">View</Button> */}
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
            <label className="col-form-label">CreditedAmount</label>
            <input  type="text" defaultValue={creditedAmount}  className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label className="col-form-label">CreditedAt</label>
            <input  type="text" defaultValue={creditedAt} className="form-control" id="recipient-name"/>
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

export default PayrollList