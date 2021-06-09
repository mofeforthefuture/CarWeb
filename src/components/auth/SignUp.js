import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './auth.css'
import AppNavbar from '../AppNavbar'

function Submit() {
    alert('submitted')
}

function Signup() {
    return (
        <div>
            <AppNavbar />
            <div className='form-container'>
                <h1>Signup</h1>
                <Form>
                    <Form.Field>
                        <Form.Input label='Username' placeholder='Username' />
                    </Form.Field>
                    <Form.Field widths={1}>
                        <Form.Input label='Password' placeholder='Password' type='password' />
                        <Form.Input label='Confirm Password' placeholder=' Confirm Password' type='password' />
                    </Form.Field>
                    <Button className='submitBtn' onClick={Submit}>Submit</Button>
                    <Link to='/login'>Have an account? login instead.</Link>
                </Form>
            </div>
        </div>
    );

}

export default Signup