import React, {useState} from 'react';
import {Button, FormGroup, FormControl, InputLabel, Input, Typography} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';


import './styles/Signup.css';
import {createAdmin} from './service/api.js';




function Signup() {
    
    
    const [admin, setAdmin] = useState({
        email: '',
        username: '',
        password:'',
        confirm_password: ''
    });

    const handleOnChange = (e)=>{
        let {name, value} = e.target;
        setAdmin({...admin, [name]:value});
        
    }
    console.log(admin)
    
    const handleClick = async (e)=>{
        e.preventDefault();
        if(admin.password === admin.confirm_password){
            const toSendAdmin = {
                email: admin.email,
                username: admin.username,
                password: admin.password
            }
            
            console.log(toSendAdmin);
            await createAdmin(toSendAdmin);
            
        }else{
            alert("Password and Confirm Password should be same.");
        }

        alert("Account created successfully");
    }
  return (
    <div className='signup-form-wrapper'>
        <FormGroup className='form'>
            <Typography variant='h4'>
                Admin Signup
            </Typography>
            <FormControl>
                <InputLabel>Email:</InputLabel>
                <Input type='text' onChange={(e)=>handleOnChange(e)} name='email' value={admin.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Username:</InputLabel>
                <Input onChange={(e)=>handleOnChange(e)} name='username' value={admin.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Password:</InputLabel>
                <Input onChange={(e)=>handleOnChange(e)} name='password' value={admin.password} />
            </FormControl>
            <FormControl>
                <InputLabel>Confirm Password:</InputLabel>
                <Input onChange={(e)=>handleOnChange(e)} name='confirm_password' value={admin.confirm_password} />
            </FormControl>
            <div>
                <Button type="submit" variant="contained" color="success" onClick={(e)=>handleClick(e)}>
                    Create Account
                </Button>
                <p>Or</p>
                <Button variant="contained" startIcon={<GoogleIcon />} color="error">
                    Continue with Google
                </Button>
                <p>Already have an account ? <Button component={Link} to='/admin' >Login</Button></p>
            </div>
        </FormGroup>
        </div>
  )
}

export default Signup