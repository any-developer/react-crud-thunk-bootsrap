import React, { useEffect, useState } from 'react'
import { User } from './User'
import Table from 'react-bootstrap/Table'
import { readUsers } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'
import { filterUsers, searchUser } from '../redux/actions'


const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)
    const [value, setValue] = useState([])

    useEffect(() => {
        dispatch(readUsers())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    )

    const handleChange = (event) => {
        setValue(prev => (
            {
                ...prev, ...{ [event.target.name]: event.target.value }
            })
        )
    }

    const handleFilter = (event) => {
        event.preventDefault()
        dispatch(filterUsers(value))
    }

    const handleSearch = (event) => {
        event.preventDefault()
        dispatch(searchUser(value))
    }

    return (
        <>
            <Col lg={12} >
                <h3>Filter users</h3>
            </Col>
            <Col lg={6} >
                <InputGroup className="mb-3">
                    <Form.Control value={value.role || ''} name="role" as="select" onChange={handleChange} required>
                        <option className="d-none" value="">
                            Select Role
                        </option>
                        <option>all</option>
                        <option>client</option>
                        <option>partner</option>
                        <option>admin</option>
                    </Form.Control>
                    <InputGroup.Append>
                        <Button onClick={handleFilter}>
                            Filter 
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
            <Col lg={6} >
                <InputGroup className="mb-3">
                    <Form.Control value={value.search || ''} name="search" type="text" placeholder="Search" onChange={handleChange} />
                    <InputGroup.Append>
                        <Button onClick={handleSearch}>
                            Search
                        </Button>
                    </InputGroup.Append>
                </InputGroup >
            </Col>
            <Col lg={12} className="mt-5">
                <Table responsive="lg" hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>CreationDate</th>
                            <th>ModificationDate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <User key={user.creationDate} user={user} />)
                        }
                    </tbody>
                </Table>
            </Col>
        </>
    )
}

export default Users