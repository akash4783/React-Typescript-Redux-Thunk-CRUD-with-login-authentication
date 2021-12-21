import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { getSingleEmployee, getSingleUser, updateUser } from '../redux/action';
import HOCAuth from '../Auth/Hoc';

 function EditEmployee() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const[data,setData]:any=useState({
        firstName:"",
        lastName:"",
        email:"",
        mobile:"",
        address:"",
        country:"",
        state:"",
        city:"",
        userRole:"",
        designation:""
    })
    const [salary, setSalary] = useState<number>()
    let dataresult: any = useSelector((state: any) => {
        return state.data.user
    });
    useEffect(() => {
        if(dataresult?.data?.salary){
            setSalary(dataresult?.data?.salary)

        }
       
       
    }, [dataresult])
    
    
const editdata = dataresult.data


    const { firstName, lastName, email, mobile, address, country, state, city, userRole, designation} = data;

   
 

    useEffect(()=>{
        dispatch(getSingleEmployee(id))
    },[id])

    useEffect(()=>{
        if(editdata){
            setData({...editdata})
        }
    },[editdata])

    const handleChange = (e: any) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const salaryHandleChange=(e:any)=>{
        setSalary(Number(e.target.value))
    }
    const handleSubmit=()=>{
        const finalData = {
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            mobile:data.mobile,
            address:data.address,
            country:data.country,
            state:data.state,
            city:data.city,
            userRole:data.userRole,
            designation:data.designation,
            salary:salary
        }
        dispatch(updateUser(id,finalData))
        navigate("/employeehome")


    }

    return (
        <HOCAuth>

        <div className="Form">
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" onChange={handleChange} value={firstName || ""} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" onChange={handleChange} value={lastName || ""} placeholder="Enter Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} value={email || ""} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" name="mobile" onChange={handleChange} value={mobile || ""} placeholder="Enter Mobile" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" onChange={handleChange} value={address || ""} placeholder="Enter Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" name="country" onChange={handleChange} value={country || ""} placeholder="Enter Country" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" name="state" onChange={handleChange} value={state || ""} placeholder="Enter States" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" name="city" onChange={handleChange} value={city || ""} placeholder="Enter City" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>User Role</Form.Label>
                    <Form.Control type="text" name="userRole" onChange={handleChange} value={userRole || ""} placeholder="Enter UserRole" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control type="text" name="designation" onChange={handleChange} value={designation || ""} placeholder="Enter Designation" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>salary</Form.Label>
                    <Form.Control type="number" name="salary" onChange={salaryHandleChange} value={salary || ""} placeholder="Enter Salary" />
                </Form.Group>

                <Button type="submit">Add</Button>

                <Button style={{ marginLeft: "20px" }}>Go Back</Button>
            </Form>

        </div>
        </HOCAuth>
    )

}
export default EditEmployee