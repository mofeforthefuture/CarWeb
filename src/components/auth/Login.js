import React from 'react';

import { Button, Form } from 'semantic-ui-react'
import './auth.css'
import { Link } from 'react-router-dom'
import Navbar from '../AppNavbar';



function Submit() {
    alert('submitted')
}

function Login() {
    return (
        <div>
            <Navbar />

            <div className='form-container'>
                <h1>Login</h1>
                <Form>
                    <Form.Field>
                        <Form.Input label='Username' placeholder='Username' />
                    </Form.Field>
                    <Form.Field widths={1}>
                        <Form.Input label='Password' placeholder='Password' type='password' />
                    </Form.Field>
                    <Button className='submitBtn' onClick={Submit}>Submit</Button>
                    <Link to='/sign-up'>Don't have an account?Sign up instead</Link>
                </Form>
            </div>
        </div>
    );
}

export default Login;