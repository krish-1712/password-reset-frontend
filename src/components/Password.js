import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import axios from 'axios';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Password = () => {
    let [password,setPassword]=useState("")
    let [confirm,setConfirm]=useState("")
    let navigate=useNavigate();
    const tokenParam = new URLSearchParams(window.location.search);
    const decodedToken = tokenParam.get('token');
    console.log("Testing :"+decodedToken);

    const handleResetPassword = async () => {
        try {
          const response = await axios.post(`${url}/users/password-reset`, {
            password,
            confirm,
            token : decodedToken
          });
    
          if (response.status === 200) {
            console.log(response)
            toast.success(response.data.message)
            navigate('/reset')
          } else {
           
          }
        } catch (error) {
          console.log('Error:', error.message);
          toast.error(error.response.data.message)
        }
      };

    return (
        <div className='Password-wrapper'>
            <h1 style={{ "textAlign": "center" }}>Reset Password </h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Confirm Password" onChange={(e) => setConfirm(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={handleResetPassword}>
                    Reset Password
                </Button> 
            </Form>
        </div>
    )
}

export default Password