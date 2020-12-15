import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { updateUser, deleteUser } from '../redux/actions'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const User = ({ user }) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [values, setValue] = useState([])

    const handleChange = (event) => {
        setValue(prev => (
            {
                ...prev, ...{ [event.target.name]: event.target.value }
            })
        )
    }

    const handleSubmit = (event, creationDate) => {
        event.preventDefault()
        values.creationDate = creationDate
        values.modificationDate = new Date().toString()
        dispatch(updateUser(creationDate, values))
        setShow(false)
        setValue([])
    }

    return (
        <>
            <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user.creationDate}</td>
                <td>{user.modificationDate}</td>
                <td>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary" onClick={handleShow}>
                            Update
                        </Button>
                        <Button onClick={() => dispatch(deleteUser(user.creationDate))} variant="danger">
                            Remove
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title >Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(event) => handleSubmit(event, user.creationDate)}>
                        <Row>
                            <Col>
                                <Form.Group >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control value={values.firstName || ''} name="firstName" type="text" placeholder="First Name" onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control value={values.lastName || ''} name="lastName" type="text" placeholder="Last Name" onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control value={values.email || ''} name="email" type="email" placeholder="Enter email" onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control value={values.password || ''} name="password" type="password" placeholder="Password" onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group >
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control value={values.phone || ''} name="phone" type="text" placeholder="Phone" onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group  >
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control value={values.role || ''} name="role" as="select" onChange={handleChange} required>
                                        <option className="d-none" value="">
                                            Select Role
                                        </option>
                                        <option>client</option>
                                        <option>partner</option>
                                        <option>admin</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit" >
                                        Submit
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
