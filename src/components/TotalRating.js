import { faChartBar, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, ProgressBar, Row, Col } from 'react-bootstrap';

export const TotalRating = (props) => {

    const ratings = {
        "rating": {
            'Quality/Achive usable results': `${props.ratings.quality}`,
            'Working pace/Quantity': `${props.ratings.quantity}`,
            'Expertise': `${props.ratings.knowledge}`,
            'Initiative ': `${props.ratings.initiative}`,
            'Communication skills': `${props.ratings.communication}`,
            'Ability to work in a team': `${props.ratings.team}`,
            'Abiltity to learn/Readiness of mind': `${props.ratings.learning}`,
            'Motivation': `${props.ratings.motivation}`,
            'Appearance/Acceptance among their colleagues and external partners': `${props.ratings.performance}`,
            'Planning and organizational skills': `${props.ratings.organization}`,
            'Average': `${props.ratings.total}`
        }
    }

    return (
        <Row>
            <Col sm={12}>
                {
                    Object.keys(ratings.rating).map((key, i) => (
                        <Card className="rating mb-3" key={i}>
                            <Card.Header>
                                {key === 'Average' ? (
                                    <FontAwesomeIcon icon={faTachometerAlt} />
                                ) : (
                                    <FontAwesomeIcon icon={faChartBar} />
                                )}
                                <strong> {key}</strong> ({ratings.rating[key]}%) </Card.Header>
                            <Card.Body>
                                <ProgressBar striped variant={ratings.rating[key] <= 30 ? 'danger' : ratings.rating[key] > 30 && ratings.rating[key] < 60 ? 'warning' : 'success'} now={ratings.rating[key]} />
                            </Card.Body>
                        </Card>
                    ))
                }
            </Col>
        </Row>
    )
}

