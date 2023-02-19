import React from 'react';
import { Container, Col, Row, Card, Form } from 'react-bootstrap';
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CreateButton } from '../utils/helper/CreateButton';
import { EmployeeFormFields } from './forms/EmployeeFormFields'
import { RatingFormFields } from './forms/RatingFormFields'

export const CreateEmployee = (props) => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const createEmployee = async (ratings) => {
        await axios.post('http://localhost:3004/ratings', ratings).then(result => {
            console.log('New employee created!');
            navigate('/');
        })
    };

    const onSubmit = data => {
        //alert(JSON.stringify(data));
        const ratings = {
            "id": null,
            "name": data.name,
            "city": data.city,
            "gender": data.gender,
            "age": data.age,
            "department": data.department,
            "rating": {
                "quality": parseInt(data.quality),
                "quantity": parseInt(data.quantity),
                "knowledge": parseInt(data.knowledge),
                "initiative": parseInt(data.initiative),
                "communication": parseInt(data.communication),
                "team": parseInt(data.team),
                "learning": parseInt(data.learning),
                "motivation": parseInt(data.motivation),
                "performance": parseInt(data.performance),
                "organization": parseInt(data.organization),
                "total": (parseInt(data.quality) + parseInt(data.quantity)
                    + parseInt(data.knowledge) + parseInt(data.initiative) +
                    parseInt(data.communication) + parseInt(data.team) +
                    parseInt(data.learning) + parseInt(data.motivation) +
                    parseInt(data.performance) + parseInt(data.organization)) / 10
            }
        }

        createEmployee(ratings);

    };

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Card>
                            <Card.Header><h2><FontAwesomeIcon icon={faUserShield} /> Create Employee</h2></Card.Header>
                            <Card.Body>
                                <EmployeeFormFields register={register} create={"10"} />
                                <RatingFormFields register={register} />
                                <Link to={'/'}><CreateButton handle={null} class={'cancel mt-3 me-1'} variant={'outline-danger'} icon={'times'} text={'Cancel'} /></Link>
                                <CreateButton handle={null} class={'save mt-3'} variant={'danger'} icon={'plus'} text={'Add'} submit={'submit'} />
                            </Card.Body>
                        </Card>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}