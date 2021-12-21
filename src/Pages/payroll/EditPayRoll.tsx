import React, { useEffect, useState } from 'react';
import { Form,Button } from "react-bootstrap";
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { getSinglePayroll, updatedPayRoll } from '../../api/payrollAPI';
import moment from "moment"
import AuthTokenHOC from '../../Auth/Hoc';
import HOCAuth from '../../Auth/Hoc';
 function Editpayroll (){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getSinglePayroll(id))
    },[id])
    
    const [creditedAmount, setcreditedAmount] = useState<number>(0);
    const [creditedAt, setcreditedAt] = useState("")
  
    
    const Data= useSelector((state:any)=>state.payRollData.user)
    const Amount = +Data?.data?.creditedAmount
    const newDate1 = Data?.data?.creditedAt
    
let newDate =  moment.utc(newDate1).format('YYYY-MM-DD');

  
useEffect(()=>{
    if(newDate){
        setcreditedAt(newDate)
    }

},[Data])
// console.log("meet",creditedAt);
console.log("meet",typeof Amount);


    useEffect(()=>{
        if(Amount){
            setcreditedAmount(Number(Amount))
        }
    },[Data])
    
     const creditedAmountHandleChange=(e:any)=>{
         setcreditedAmount(Number(e.target.value))
    
         


    }
    const creditedAtHandleChange=(e:any)=>{
        setcreditedAt(e.target.value)

    }
    const handleSubmit=()=>{
        const FinalData = {
            creditedAmount:creditedAmount,
            creditedAt:creditedAt
        }
        dispatch(updatedPayRoll(id,FinalData))
        navigate("/payrollList")
        
    }


   
    return(
        <HOCAuth>

 <div>

<div className="Form">
           <Form onSubmit={handleSubmit}>

           <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Credited Amount</Form.Label>
    <Form.Control  onChange={creditedAmountHandleChange} value={creditedAmount || ""} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Credited At</Form.Label>
    <Form.Control type="Date"  onChange={creditedAtHandleChange} value={creditedAt || ""} />
  </Form.Group>
<Button type="submit">Add</Button>

           </Form>
       </div>
 </div>
 </HOCAuth>

    )

}
export default Editpayroll