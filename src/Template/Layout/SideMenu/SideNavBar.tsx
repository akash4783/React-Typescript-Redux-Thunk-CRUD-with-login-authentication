import React from 'react'
import { Link } from 'react-router-dom'
import HOCAuth from '../../../Auth/Hoc'


 function SideNavBar() {
    return (
        <HOCAuth>
        <div id="wrapper">

 
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

        
            <hr className="sidebar-divider my-0"/>

         
            <li className="nav-item">
                <div className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
               <span>Dashboard</span> 
                 </div>
                   
            </li>

     
            <hr className="sidebar-divider"/>

   
            <div className="sidebar-heading">
                Interface
            </div>

  
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Employee</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Employee Data</h6>
                       <div  className="collapse-item"><Link style={{ textDecoration: 'none' }}   to ="/createEmployee"> Add Emplyoee </Link></div>
                       <div  className="collapse-item">  <Link style={{ textDecoration: 'none' }}  to="/employeehome">  Emplyoee List  </Link></div> 
                    </div>
                </div>
            </li>

          
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Payroll</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
                        <div className="collapse-item"><Link style={{ textDecoration: 'none' }}   to ="/createPayroll"> Add Payrole </Link></div>
                        <div className="collapse-item"><Link  style={{ textDecoration: 'none' }} to ="/payrollList"> payrollList </Link></div>
                    
                       
                    </div>
                </div>
            </li>

            
       

     
            {/* <div className="sidebar-heading">
                Addons
            </div> */}

  
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Increment</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        {/* <h6 className="collapse-header">Login Screens:</h6> */}
                        <div className="collapse-item"><Link style={{ textDecoration: 'none' }}  to ="/addincrement"> Add Increment </Link></div>
                        <div className="collapse-item"><Link style={{ textDecoration: 'none' }}  to ="/incrementList"> Increment List </Link></div>
                        {/* <a className="collapse-item" href="forgot-password.html">Forgot Password</a> */}
                        {/* <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a> */}
                    </div>
                </div>
            </li>
   
            <li className="nav-item active">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>

      
            <hr className="sidebar-divider d-none d-md-block"/>

           
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
     

      
        
     </div>
     </HOCAuth>
    )
}

export default  SideNavBar