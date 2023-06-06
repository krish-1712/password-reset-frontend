import axios from 'axios';
import React, {  useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import {  toast } from 'react-toastify';



const Forgot = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        try {
          const response = await axios.post(`${url}/users/reset`, { email });
            
          if (response.status === 200) {
            console.log(response)
            toast.success(response.data.message)
          } else {
            
          }
        } catch (error) {
          console.log('Error:', error.message);
          toast.error(error.response.data.message)
        }
      };

   return(
  <div className='forgot-wrapper'>
            <h1 style={{"textAlign":"center"}}>Forgot Password</h1>
            <h4  className='for' style={{"textAlign":"center"}}>Enter The Email Address Associate With your Account and we will Send you a Link to Reset your Password </h4>
      <Form  >
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}  />
        </Form.Group>
        <Button variant="primary"   onClick={handleForgotPassword}>
          Continue
        </Button>
      </Form>
      </div>
   )
}

export default Forgot