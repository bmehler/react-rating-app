import { TotalDashboard } from "./TotalDashboard";
import { Stars } from "./Stars";
import React from 'react';
import { Button } from 'react-bootstrap';

export const ButtonRating = (props) => {
    return (
        <Button variant="outline-danger" className="stars" size="sm">
            <Stars stars={props.rating} />
            <TotalDashboard total={props.rating} />
        </Button>
    )
}
