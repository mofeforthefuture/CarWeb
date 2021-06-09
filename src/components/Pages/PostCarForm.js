import React from 'react';
import { Form, Col, Button } from 'react-bootstrap'
import AppNavbar from '../AppNavbar';
//import { Formik } from 'formik';
//import yup from 'yup';



function PostCarForm(props) {
    const handleSubmit = () => {
        alert('yay')
    }
    return (
        <div>
            <AppNavbar />
            <div className='form' >
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationFormik101">
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                type="text"
                                name="model"
                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik102">
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                            />

                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>New</option>
                                <option>Used</option>
                                <option>Salvage</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationFormik103">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                name="city"
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik104">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="State"
                                name="state"
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Form.Row>
                    <Form.Group>
                        <Form.File
                            className="position-relative"
                            required
                            name="file"
                            label="Pictures"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>


        </div>
    )
}

export default PostCarForm;