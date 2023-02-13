import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { TotalRating } from '../components/TotalRating';
import axios from 'axios';

export const ShowRating = () => {
    const { id } = useParams();
    const initialFormState = {
        "id": null,
        "name": "",
        "city": "",
        "gender": "",
        "age": null,
        "department": "",
        "rating": {
            "quality": null,
            "quantity": null,
            "knowledge": null,
            "initiative": null,
            "communication": null,
            "team": null,
            "learning": null,
            "motivation": null,
            "performance": null,
            "organization": null,
            "total": null
        }
    }

    const [details, setDetails] = useState(initialFormState);

    useEffect(() => {
        axios.get(`http://localhost:3004/ratings/${id}`).then(result => {
            setDetails(result.data);
        })
    }, [id]);


    return (
        <Container>
            <Row>
                <Col lg={12}><h1 className="header mb-5"><FontAwesomeIcon icon={faChartLine} /> Rating for {details.name} </h1></Col>
            </Row>
            <TotalRating ratings={details.rating} />
        </Container>
    );
}
