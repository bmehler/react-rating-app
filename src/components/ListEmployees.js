import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, Form, Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { faUserFriends, faUserShield, faList, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonRating } from "../utils/helper/Rating/ButtonRating";
import { CreateButton } from '../utils/helper/CreateButton';
import axios from 'axios';

export const ListEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [views, setView] = useState('grid');
    const navigate = useNavigate();

    const handleSelect = (e) => {
        if (e.target.value === 'down') {
            axios.get('http://localhost:3004/ratings').then(result => {
                let down = result.data.sort((a, b) => a.rating.total - b.rating.total)
                setEmployees(down);
            })
        } else {
            axios.get('http://localhost:3004/ratings').then(result => {
                let up = result.data.sort((a, b) => b.rating.total - a.rating.total)
                setEmployees(up);
            })
        }
    }

    const handleList = (e) => {
        let id = e.target.id;
        let views = id;
        setView(views);
        if (document.getElementById("list").classList.contains("active")) {
            document.getElementById("grid").classList.add('active');
            document.getElementById("list").classList.remove('active');
        } else {
            document.getElementById("list").classList.add('active');
            document.getElementById("grid").classList.remove('active');
        }

    }
    const handleDelete = (e) => {
        let id = e.target.id;
        console.log('handleDelete', e.target.id);
        deleteEmployee(id);
        navigate('/');
    }

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:3004/ratings/${id}`);
        setEmployees(
            employees.filter((employee) => {
                return employee.id != id;
            })
        );
    };
    
    useEffect(() => {
        const fetchEmployees = async () => {
            await axios.get('http://localhost:3004/ratings').then(result => { 
                result.data.sort((a, b) => b.rating.total - a.rating.total);
                setEmployees(result.data);
            });
        };
        fetchEmployees();
    }, []);


    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1 className="header"><FontAwesomeIcon icon={faUserFriends} /> Employee Rating </h1>
                    <Form.Group id="sort" className="mb-3 float-end">
                        <Form.Control as="select" onChange={handleSelect} name="sort" id="sort">
                            <option value="up">Absteigend</option>
                            <option value="down">Aufsteigend</option>
                        </Form.Control>
                    </Form.Group>
                    <Button id="list" className="me-1 float-end" variant="outline-danger" onClick={handleList}><FontAwesomeIcon icon={faList} id="listAction" /> List View</Button>
                    <Button id="grid" className="me-1 float-end active" onClick={handleList} variant="outline-danger"><FontAwesomeIcon icon={faTh} id="gridAction" /> Grid View</Button>
                </Col>
            </Row>
            <Row>
                {employees.length > 0 && views === 'grid' ? (
                    employees.map((employee) => (
                        <Col sm={12} md={12} lg={4} key={employee.id}>
                            <Card className="mb-3">
                                <Card.Header as="h6"><FontAwesomeIcon icon={faUserShield} /> {employee.name} <Link to={`/show/${employee.id}`}>  <ButtonRating rating={employee.rating.total} /></Link></Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        <img alt="placeholder" className="img-fluid" src="https://via.placeholder.com/600x600"></img>
                                    </Card.Text>
                                    <Link to={`/detail/${employee.id}`}><CreateButton handle={null} class={'show me-1'} variant={'outline-dark'} icon={'eye'} text={'Show'} submit={null} /></Link>
                                    <Link to={`/edit/${employee.id}`}><CreateButton handle={null} class={'edit me-1'} variant={'danger'} icon={'edit'} text={'Edit'} submit={null} /></Link>
                                    <CreateButton handle={handleDelete} id={employee.id} class={'show me-1'} variant={'primary'} icon={'trash'} text={'Delete'} submit={null} />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col lg={12}>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th className="text-center">Rating</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Department</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr className="text-center" key={employee.id}>
                                        <td><Link to={`/show/${employee.id}`}>  <ButtonRating rating={employee.rating.total} /></Link></td>
                                        <td>{employee.name}</td>
                                        <td>{employee.department}</td>
                                        <td>
                                            <Link to={`/edit/${employee.id}`}><CreateButton handle={null} class={'edit me-1'} variant={'danger'} icon={'edit'} text={'Edit'} submit={null} /></Link>
                                            <Link to={`/detail/${employee.id}`}><CreateButton handle={null} class={'show me-1'} variant={'outline-dark'} icon={'eye'} text={'Show'} submit={null} /></Link>
                                            <CreateButton handle={handleDelete} id={employee.id} class={'show me-1'} variant={'primary'} icon={'trash'} text={'Delete'} submit={null} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                )}

            </Row>
        </Container>
    );
}