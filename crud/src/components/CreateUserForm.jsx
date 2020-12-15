import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {createUser} from '../redux/actions'


const CreateUserForm = ()=> {
    const dispatch = useDispatch()

    const [values, setValue] = useState([])

    const handleChange = (event) => {
       setValue(prev => (
           {
               ...prev, ...{[event.target.name]: event.target.value}
           })
       )
    }

    const handleSubmit = (event) => {    
        event.preventDefault()
        values.creationDate = new Date().toString()
        values.modificationDate = new Date().toString()
        dispatch(createUser(values))
        setValue([])        
     }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control value={values.firstName || ''} name="firstName"  type="text" placeholder="First Name" onChange={handleChange} required/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control value={values.lastName || ''} name="lastName"  type="text" placeholder="Last Name" onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={values.email || ''} name="email"  type="email" placeholder="Enter email" onChange={handleChange} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={values.password || ''} name="password"  type="password" placeholder="Password" onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control value={values.phone || ''} name="phone"  type="text" placeholder="Phone" onChange={handleChange} required/>
                    </Form.Group>
                </Col>
            <Col>   
            <Form.Group  >
                <Form.Label>Role</Form.Label>
                <Form.Control value={values.role || ''} name="role"  as="select" onChange={handleChange} required>
                    <option className="d-none" value="">
                         Select Role
                    </option>
                    <option>client</option>
                    <option>partner</option>
                    <option>admin</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
            </Col>
            </Row>
        </Form>
    )
}

export default CreateUserForm