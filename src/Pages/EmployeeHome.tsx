import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteusers, loadusers } from '../redux/action';
import "../assets/css/admin.css"
import "../assets/css/sb-admin-2.min.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import HOCAuth from '../Auth/Hoc';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import {toast} from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
function EmployeeHome() {
 

  const [employeeData, setEmployeeData]:any = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkData = useSelector((state: any) => state.data.users);

  let m: any;
  if (checkData) {
    m = checkData;
  }
  useEffect(() => {
    dispatch(loadusers())
  }, [])
  const handledelete = (id: any) => {
    if (window.confirm("Are sure to Delete")) {
      dispatch(deleteusers(id))
      toast("Wow so easy !",{autoClose:3000})
    }
  }

  const handleView = (id: any) => {
    const finalViewData = checkData.data.find((item: any) => item.id === id);
    if(finalViewData) {
      setEmployeeData(finalViewData);
    }
  }

  return (
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
                      <th>FirstName</th>
                      <th>lastName</th>
                      <th>email</th>
                      <th>address</th>
                      <th>country</th>
                      <th>createdAt</th>
                      <th>salary</th>
                      <th>state</th>
                      <th>mobile</th>
                      <th>designation</th>
                      <th>userRole</th>
                      <th>city</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Sr No</th>
                      <th>FirstName</th>
                      <th>lastName</th>
                      <th>email</th>
                      <th>address</th>
                      <th>country</th>
                      <th>createdAt</th>
                      <th>salary</th>
                      <th>state</th>
                      <th>mobile</th>
                      <th>designation</th>
                      <th>userRole</th>
                      <th>city</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {m.data && m.data.map((item: any, id: any) => {
                      var date = new Date(item.createdAt);
                      var newDate = date.toISOString().substring(0, 10);
                      return (
                        <tr key={id}>
                          <td>{id + 1}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.email}</td>
                          <td>{item.address}</td>
                          <td>{item.country}</td>
                          <td>{newDate}</td>
                          <td>{item.salary}</td>
                          <td>{item.state}</td>
                          <td>{item.mobile}</td>
                          <td>{item.designation}</td>
                          <td>{item.userRole}</td>
                          <td>{item.city}</td>
                          <td>
                         <DeleteIcon style={{color:"red"}} onClick={() => { handledelete(item.id) }}></DeleteIcon>
                            <EditIcon style={{color:"blue"}} onClick={() => { navigate(`/editemployee/${item.id}`) }}></EditIcon>
                            {/* <Button onClick={() => { handledelete(item.id) }} variant={"danger"}>DELETE</Button> */}
                            {/* <Button onClick={() => { navigate(`/editemployee/${item.id}`) }}>Edit</Button> */}
                            {/* <Button variant={"warning"}>View</Button> */}
                            <PreviewIcon style={{color:"grey"}} data-toggle="modal" data-target="#exampleModalCenter" onClick={() => { handleView(item.id) }}></PreviewIcon>
                            {/* <Button onClick={() => { handleView(item.id) }} type="button" variant={"warning"} data-toggle="modal" data-target="#exampleModalCenter">View</Button> */}
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
                            <label className="col-form-label">First Name</label>
                            <input type="text" defaultValue={employeeData?.firstName} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">Last Name</label>
                            <input type="text" defaultValue={employeeData?.lastName} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">Email</label>
                            <input type="text" defaultValue={employeeData?.email} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">Address</label>
                            <input type="text" defaultValue={employeeData?.address} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">Country</label>
                            <input type="text" defaultValue={employeeData?.country} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">CreatedAt</label>
                            <input type="text" defaultValue={employeeData?.createdAt} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">Salary</label>
                            <input type="text" defaultValue={employeeData?.salary} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">State</label>
                            <input type="text" defaultValue={employeeData?.state} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">Mobile</label>
                            <input type="text" defaultValue={employeeData?.mobile} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">Designation</label>
                            <input type="text" defaultValue={employeeData?.designation} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">User Role</label>
                            <input type="text" defaultValue={employeeData?.userRole} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label className="col-form-label">City</label>
                            <input type="text" defaultValue={employeeData?.city} className="form-control" id="recipient-name" />
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
export default EmployeeHome