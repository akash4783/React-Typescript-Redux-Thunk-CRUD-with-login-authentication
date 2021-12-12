import React, { useState } from 'react';
import "../assets/css/admin.css"
import { Link } from 'react-router-dom';

function Login(props:any) {
    const [pwd, setPwd] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    })
 
    const { email, password } = data;

    const handleChange = (e:any) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(email !== '' || password !== '') {
            // props.history.push('/productlist');
            console.log(data);
        }
    }

    const togglePwd = () => {
        setPwd(!pwd);
    }

    return (
        <div>
            <h3 className= 'soupshop'>Login</h3>
            <div className= 'container loginContainer'>
                <div className= 'login'>
                    <form onSubmit={(e) => handleSubmit(e)}><br />
                        <div className= "loginHeading">
                            <h4>Login</h4>
                        </div><br />

                        <div className="form-group">
                            <input className="form-control" value= {email} onChange= {handleChange} name="email" placeholder="Enter Email-ID" type="email" required/>
                        </div>

                        <div className="form-group">
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