import React, { useEffect, useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import { getSingleIncrement, updatedIncrement } from '../../api/incrementAPI';
import moment from 'moment';
import { useNavigate } from 'react-router';
import AuthTokenHOC from '../../Auth/Hoc';
import HOCAuth from '../../Auth/Hoc';
function EditIncrement (){
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    const [currentSalary, setcurrentSalary] = useState()
    const [appraisalAmount, setappraisalAmount] = useState()
    const [appraisalDate, setappraisalDate] = useState("")
    const[percentage,setpercentage]= useState<number>()
    
    const checkData = useSelector((state:any)=>state.incrementdata.user)
    
    const Percentage = +checkData?.data?.percentage
    const Salary = checkData?.data?.currentSalary
    const Amount = checkData?.data?.appraisalAmount
     const Date = checkData?.data?.appraisalDate 
     let newDate =  moment.utc(Date).format('YYYY-MM-DD');

    console.log(Salary);
    useEffect(()=>{
        if(Percentage){
            setpercentage(Number(Percentage))
        }
    },[Percentage])

    useEffect(()=>{
        if(Salary){
            setcurrentSalary(Salary)
        }
    },[checkData])
    useEffect(()=>{
        if(Amount){
            setappraisalAmount(Amount)
        }
    },[checkData])
    useEffect(()=>{
        if(newDate){
            setappraisalDate(newDate)
        }
    },[checkData])

useEffect(()=>{
    dispatch(getSingleIncrement(id))

},[id])

const salaryhandleChange=(e:any)=>{
    setcurrentSalary(e.target.value)
}
const creditedAmountChange=(e:any)=>{
    setappraisalAmount(e.target.value)
}
const appraisalHandleChange=(e:any)=>{
    setappraisalDate(e.target.value)
}
const handleChange=(e:any)=>{
    setpercentage(Number(e.target.value))

}

const EditHandleClick=()=>{
    let FinalData = {
        percentage:percentage,
        appraisalDate:appraisalDate
    }
    dispatch(updatedIncrement(id,FinalData))
    navigate ("/incrementList")
}
    return(
        <HOCAuth>

       <div>


<div>

<div className="Form">
           <Form onSubmit={EditHandleClick} >
           <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Current Salary</Form.Label>
    <Form.Control type="number"  onChange={salaryhandleChange} value={currentSalary || ""}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Percentage</Form.Label>
    <Form.Control  onChange={handleChange} value={percentage || ""}  />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label> Appraisal Amount</Form.Label>
    <Form.Control type="number" onChange={creditedAmountChange} value={appraisalAmount || ""}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Appraisal Date</Form.Label>
    <Form.Control type="Date" onChange={appraisalHandleChange} value={  appraisalDate || ""} placeholder="Enter Last Name" />
  </Form.Group>
<Button type="submit">Add</Button>

           </Form>
       </div>
 </div>
       </div>
       </HOCAuth>
    )

}

export default EditIncrement