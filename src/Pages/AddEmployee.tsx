import Button from '@restart/ui/esm/Button';
import React,{useState} from 'react'; 
import { useDispatch,useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import "../assets/css/form.css"
import { adduser } from '../redux/action';
// import { useNavigate } from 'react-router';

export default function AddEmployee (){
    const dispatch = useDispatch()
 


    const[data,setData]:any=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        mobile:"",
        address:"",
        country:"",
        state:"",
        city:"",
        userRole:"",
        designation:"",
        salary:""
    })

const{firstName,lastName,email,password,mobile,address,country,state,city,userRole,designation,salary}=data

    const handlesubmit=(e:any)=>{
        if(!firstName || 
            !lastName|| 
            !email||
             !password ||
             ! mobile || 
             !address || 
             !country ||
             !userRole||
             !designation||
             !salary||
             !mobile||
             !state){
            alert("all field required")
        }else{
            dispatch(adduser(data))
       
    
    
        }
    
    }

    const handleChange=(e:any)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const checkData = useSelector((state:any)=>state.data.users)
    console.log(checkData)
   return(
    
<div className="Form">
<Form onSubmit={handlesubmit}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" name="firstName" onChange={handleChange} value={firstName} placeholder="Enter Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" name="lastName" onChange={handleChange} value={lastName} placeholder="Enter Last Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email" onChange={handleChange} value={email} placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" onChange={handleChange} value={password} placeholder="Enter password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" name="mobile" onChange={handleChange} value={mobile} placeholder="Enter Mobile" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" name="address" onChange={handleChange} value={address} placeholder="Enter Address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" name="country" onChange={handleChange} value={country} placeholder="Enter Country" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" name="state" onChange={handleChange} value={state} placeholder="Enter States"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" name="city" onChange={handleChange} value={city} placeholder="Enter City" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>User Role</Form.Label>
    <Form.Control type="text" name="userRole" onChange={handleChange} value={userRole} placeholder="Enter UserRole" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Designation</Form.Label>
    <Form.Control type="text" name="designation" onChange={handleChange} value={designation} placeholder="Enter Designation" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>salary</Form.Label>
    <Form.Control type="number" name="salary"  onChange={handleChange} value={salary} placeholder="Enter Salary" />
  </Form.Group>
  
  <Button type="submit">Add</Button>

  <Button style={{marginLeft:"20px"}}>Go Back</Button>
</Form>

</div> 


    )

}