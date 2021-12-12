import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddEmployee from '../../Pages/AddEmployee';
import EmployeeHome from '../../Pages/EmployeeHome';
import SideNavBar from '../Layout/SideMenu/SideNavBar';
import Login from '../../Pages/Login';
import Dashboard from '../../Pages/Dashboard';
export default function Route1 (){

    return(

        <div style={{}}>
            <BrowserRouter>
   {/* <Login/> */}
   <SideNavBar/>

            <Routes>
                
             <Route path ="/side" element={<Dashboard/>} />
             <Route path="/createEmployee" element={<AddEmployee/>}/>
                
                <Route path="/employeehome" element={<EmployeeHome/>}/>
            </Routes>
            </BrowserRouter>

        </div>

    )


}