import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';
import {Link} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import {getAdminDetail} from './service/api'

import './styles/Login.css';




function Login() {
    const [adminData, setAdminData] = useState({
        username: '',
        password: ''
    });
    // const navigate = useNavigate();
    var isLoggedIn = false;
    const handleOnchange = (e) =>{
        setAdminData({...adminData, [e.target.name]: e.target.value});
    }
    const handleClick = async(e) =>{
        e.preventDefault();
        const gotAdmin = await getAdminDetail(adminData);
        if(adminData.password === gotAdmin.data[0].password && adminData.username === gotAdmin.data[0].username){
            isLoggedIn = true;
        }else{
            alert("Incorrect username or password");
        }
    }

    const loginElem = (
        <div className='login-form-wrapper'>
        <form>
            <TextField label='Username' variant='filled' name='username' onChange={(e)=>handleOnchange(e)}  required />
            <TextField label='Password' variant='filled' type='password' name='password' onChange={(e)=>handleOnchange(e)} required />
            <div>
                <Button type="submit" variant="contained" color="success" onClick={(e)=>handleClick(e)}>
                    Login
                </Button>
                <p>Or</p>
                <Button variant="contained" startIcon={<GoogleIcon />} color="error">
                    Continue with Google
                </Button>
                <p>Don't have an account ? <Button component={Link} to='/admin/signup' >Create One</Button></p>
            </div>
        </form>
        </div>
    );
    const dashboardElem = (
        <div className="dashboard-wrapper">
        
            dashboard
        </div>
    );
    console.log(isLoggedIn);
    return (
        isLoggedIn === true ? dashboardElem : loginElem
    )
}

export default Login;