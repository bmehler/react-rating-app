import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreateButton } from '../utils/helper/CreateButton';

export const Navigation = () => {
    return (
        <Navbar bg="light" variant="light" className="mb-5">
            <Nav className='container'>
                <Nav.Item>
                    <Navbar.Brand as={Link} to="/">Rating App</Navbar.Brand>
                </Nav.Item>
                <Nav.Item className="justify-content-start">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item className="ms-auto">
                    <Link to={'/create'}><CreateButton handle={null} class={'create'} variant={'dark'} icon={'plus'} text={'Create new'} submit={null} /></Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}
