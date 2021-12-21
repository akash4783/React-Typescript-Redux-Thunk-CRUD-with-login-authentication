import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import Button from "@restart/ui/esm/Button";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { addpayroll, getSinglePayroll } from "../../api/payrollAPI";
import { payrollAdded } from "../../redux/payrollAction";
import { loadusers } from "../../redux/action";
import AuthTokenHOC from "../../Auth/Hoc";
import HOCAuth from "../../Auth/Hoc";


function Addpayroll() {
    const navigate = useNavigate()

    const dispatch = useDispatch()


   
  
    
    const [creditedAmount, setcreditedAmount] = useState<number>()
    const [creditedAt, setCreditedAt] = useState("");
    const [employee, setEmployee] = useState({
        id: ""
    })

  
   

    // if(data){
    //     setTotal({...data})
    // }
    useEffect(() => {
        dispatch(loadusers())
    }, [])
  
    const creditedAtHandle=(e:any)=>{
        setCreditedAt(e.target.value)
        console.log(e.target.value);
        

    }
    const creditedAmountHandle=(e:any)=>{
        setcreditedAmount(Number(e.target.value))
       
        

    }


    const Data = useSelector((state: any) => state.data.users)
    // console.log(">>>>>>>>>", Data.data)
    let payrollData: any;
    if (Data) {
        payrollData = Data.data

    }
   

    // const data1 = payrollData.data

    
    const handleSubmit = (e: any) => {
      
        let finalData = {
            creditedAmount:creditedAmount,
            creditedAt:creditedAt,
            employee:employee
        }
       dispatch(addpayroll(finalData))
       navigate("/payrollList")
    }

    const userChangeHandler = (id: any) => {
     
        let data:any = { ...employee };
        data.id = id;
        console.log('+++++++++', data);
        setEmployee(data);
       
    }
    // onChange={(e)=>userChangeHandler(e.target.value)}
    // value={item.id}
    // payrollData && payrollData?.data
    return (
        <HOCAuth>
       

        <div className="Form">
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Credited Amount</Form.Label>
                    <Form.Control type="number" name="creditedAmount" onChange={creditedAmountHandle} value={creditedAmount} placeholder="Enter Amount" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Credited At</Form.Label>
                    <Form.Control type="Date" name="creditedAt" onChange={creditedAtHandle} value={creditedAt} placeholder="Enter Date" />
                </Form.Group>

                <select  onChange={(e) => userChangeHandler(e.target.value)} className="form-select form-select-sm" aria-label=".form-select-sm example">

                    {
                        payrollData?.map((item: any, id: any) => {
                   
                            return (
                                < >
                                    <option value={item.id}>{item.firstName}</option>
                                </>
                            )
                        })
                    }
                </select>

                <div><Button type="submit">Add</Button></div>

            </Form>
        </div>
        </HOCAuth>
      

    )

}

export default Addpayroll