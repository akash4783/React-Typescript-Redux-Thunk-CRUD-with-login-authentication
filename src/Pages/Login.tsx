
import React, { useState,useEffect } from 'react';
import "../assets/css/admin.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addLogin } from '../api/LoginApi';

function Login(props:any) {
    const dispatch = useDispatch()
    const [pwd, setPwd] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    })
  
 
    const { email, password } = data;

    
       
    
        /* 
         if (accessToken !== null) {
             if (previousPath !== null || previousPath === undefined) {
               history.push(previousPath);
             } else {
               history.push('/dashboard');
             }
           }
         */
            
    

    const handleChange = (e:any) => {
        setData({...data, [e.target.name]: e.target.value});
    }
  

    
    const togglePwd = () => {
        setPwd(!pwd);
    }
 
     const handleSubmit = (e:any) => {
         e.preventDefault()
         dispatch(addLogin(data))

            
     }
    
    return (
        <div>
            <div className= 'container loginContainer'>
                <div className= 'login'>
                    <form onSubmit={handleSubmit}><br />
                        <div className= "loginHeading">
                            <h4>Login</h4>
                        </div><br />

                        <div className="form-group user-email">
                            <input className="form-control" value= {email} onChange= {handleChange} name="email" placeholder="Enter Email-ID" type="email" required/>
                        </div>

                        <div className="form-group user-password">
                            <input className="form-control" value= {password} onChange= {handleChange} name="password" placeholder="Enter Password" type= {pwd? "text": "password"} required/>
                            <i className={`fa ${pwd ? "fa-eye-slash": "fa-eye"} password-icon`} onClick= {togglePwd}></i>
                        </div>

                        <button className="btn btn-secondary loginbtn" type="submit">Login</button><br />
                        <a className="user">New User? <Link to="/">Signup here</Link></a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;