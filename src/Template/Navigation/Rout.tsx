import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddEmployee from '../../Pages/AddEmployee';
import EmployeeHome from '../../Pages/EmployeeHome';
import SideNavBar from '../Layout/SideMenu/SideNavBar';
import Login from '../../Pages/Login';
import Dashboard from '../../Pages/Dashboard';
import Addpayroll from '../../Pages/payroll/Addpayroll';
import PayrollList from '../../Pages/payroll/PayrollList';
import Editpayroll from '../../Pages/payroll/EditPayRoll';
import EditEmployee from '../../Pages/EditEmployee';
import Addincrement from '../../Pages/increment/AddIncrement';
import IncrementList from '../../Pages/increment/IncrementList';
import EditIncrement from '../../Pages/increment/EditIncrement';
import 'react-toastify/dist/ReactToastify.css';
export default function Route1 (){
    

    return(

            <BrowserRouter>
        <div className="row">

            <div className="col-md-2">
            <SideNavBar/>
            </div>
            <div className="col-md-10">
            <Dashboard/>
            <Routes>
                <Route path="/employeehome" element={<EmployeeHome/>}/>
                <Route path="/createEmployee" element={<AddEmployee/>}/>
                <Route path="/createPayroll" element={<Addpayroll/>}/>
                <Route path="/payrollList" element={<PayrollList/>}/>
                <Route path="/editpayrole/:id" element={<Editpayroll/>}/>
                <Route path="/editemployee/:id" element={<EditEmployee/>}/>
                <Route path="/addincrement" element={<Addincrement/>}/>
                <Route path="/incrementList" element={<IncrementList/>}/>
                <Route path="/editincrement/:id" element={<EditIncrement/>}/>
            </Routes>
            </div>
            </div>

            </BrowserRouter>


    )


}