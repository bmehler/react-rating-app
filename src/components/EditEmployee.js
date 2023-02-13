import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Col, Row, Card, Form } from 'react-bootstrap';
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { CreateButton } from '../helper/CreateButton';
import { EmployeeFormFields } from '../forms/EmployeeFormFields'
import { RatingFormFields } from '../forms/RatingFormFields'

export const EditEmployee = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, errors } = useForm();
    
    useEffect(() => {
        axios.get(`http://localhost:3004/ratings/${id}`).then(result => {
            setValue("id", result.data.id);
            setValue("name", result.data.name);
            setValue("city", result.data.city);
            setValue("gender", result.data.gender);
            setValue("age", result.data.age);
            setValue("department", result.data.department);
            setValue("quality", result.data.rating.quality);
            setValue("quantity", result.data.rating.quantity);
            setValue("knowledge", result.data.rating.knowledge);
            setValue("initiative", result.data.rating.initiative);
            setValue("communication", result.data.rating.communication);
            setValue("team", result.data.rating.team);
            setValue("learning", result.data.rating.learning);
            setValue("motivation", result.data.rating.motivation);
            setValue("performance", result.data.rating.performance);
            setValue("organization", result.data.rating.organization);
        })
    }, [id, setValue]);

    const handleShow = (e) => {
        e.preventDefault();
        //console.log('show');
        const ids = ['name', 'city', 'gender', 'age', 'department'];
        ids.map((id) => document.getElementById(id).readOnly = false);
        ids.map((id) => document.getElementById(id).style.backgroundColor = 'white');
        document.getElementById("button-show").classList.add("active");
        document.getElementById("button-hide").classList.remove("active");
    }

    const handleHide = (e) => {
        e.preventDefault();
        //console.log('hide')
        const ids = ['name', 'city', 'gender', 'age', 'department'];
        ids.map((id) => document.getElementById(id).readOnly === false ? document.getElementById(id).readOnly = true : '');
        ids.map((id) => document.getElementById(id).style.backgroundColor = '#f2f2f2');
        document.getElementById("button-show").classList.remove("active");
        document.getElementById("button-hide").classList.add("active");
    }


    const onSubmit = data => {
        const ratings = {
            "id": null,
            "name": data.name,
            "city": data.city,
            "gender": data.gender,
            "age": parseInt(data.age),
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

        axios.put(`http://localhost:3004/ratings/${id}`, ratings).then(result => {
            console.log('Employee edited!');
            navigate('/');
        })

    };

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Card>
                            <Card.Header><h2><FontAwesomeIcon icon={faUserShield} /> Edit Employee</h2></Card.Header>
                            <Card.Body>
                                <EmployeeFormFields register={register} errors={errors} create={"1"} />
                                <CreateButton handle={handleShow} id={'button-show'} class={'writeable button-show me-1 mt-3 mb-3'} variant={'outline-danger'} icon={'eye'} text={'Edit'} />
                                <CreateButton handle={handleHide} id={'button-hide'} class={'writeable button-hide active mt-3 mb-3'} variant={'outline-danger'} icon={'eye-slash'} text={'Disabled'} />
                                <RatingFormFields register={register} />
                                <Link to={'/'}><CreateButton handle={null} class={'cancel me-1 mt-3'} variant={'outline-danger'} icon={'times'} text={'Cancel'} /></Link>
                                <CreateButton handle={null} class={'save'} variant={'danger mt-3'} icon={'edit'} text={'Edit'} submit={'submit'} />
                            </Card.Body>
                        </Card>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}