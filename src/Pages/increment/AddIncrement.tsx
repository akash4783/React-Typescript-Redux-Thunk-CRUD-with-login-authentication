import React, { useState,useEffect } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { addIncrementList, loadIncrementList } from '../../api/incrementAPI';
import { loadusers } from '../../redux/action';
import { useNavigate } from 'react-router';
import HOCAuth from '../../Auth/Hoc';


 function Addincrement (){
    const dispatch = useDispatch()
    const navigate=useNavigate()
const [percentage, setpercentage] = useState<number>()
const [appraisalDate, setappraisalDate] = useState("")
const [employee,  setEmployee] = useState({
    id:"",
    salary:""
})
  
useEffect(() => {
    dispatch(loadusers())

   
}, [])

const CheckData = useSelector((state:any) => state.data.users)
let incrementData: any;
if (CheckData) {
   incrementData= CheckData.data
}

 const PercentagehandleChange=(e:any)=>{
     setpercentage(Number(e.target.value))
 }

 const appraisalDateHandleChange=(e:any)=>{
    // const date = Moment.utc(e.target.value).format('MM/DD/YY');
    
    
    
     setappraisalDate(e.target.value)

 }
 const userChangeHandler = (id: any) => {
    let selectedEmployeData = CheckData.data.find((item:any)=>item.id===id)
  
    let data:any = { ...employee };
    data.id = id;
    data.salary=selectedEmployeData.salary
 
    // console.log('+++++++++', data);
    setEmployee(data);
   
}
 const handleSubmit=(e:any)=>{
     e.preventDefault()
     const finalData = {
         percentage:percentage,
         appraisalDate:appraisalDate,
         employee:employee
         }
       
     dispatch(addIncrementList(finalData))
     navigate("/incrementList")
 }
 
    return(
<HOCAuth>
       <div className="Form">
           <Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formGroupEmail">
<Form.Label>Percentage</Form.Label>
<Form.Control type="number" name="percentage" onChange={PercentagehandleChange} value={percentage} placeholder="Enter Percentage" />
</Form.Group>
<Form.Group className="mb-3" controlId="formGroupPassword">
<Form.Label>appraisalDate</Form.Label>
<Form.Control type="Date" name="appraisalDate" onChange={appraisalDateHandleChange} value={appraisalDate}  />
</Form.Group>
<select onChange={(e) => userChangeHandler(e.target.value)} className="form-select form-select-sm" aria-label=".form-select-sm example">

{
    incrementData?.map((item: any, id: any) => {
      
        return (
            < >
                <option value={item.id} >{item.firstName}</option>
            </>
        )
    })
}
</select>
<Button type="submit">Add</Button>

</Form>
       </div>
       </HOCAuth>

    )

}

export default Addincrement