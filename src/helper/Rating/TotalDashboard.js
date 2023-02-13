import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from 'react-bootstrap';

export const TotalDashboard = (props) => {

    return (
        <Badge className="badge bg-danger" variant="outline-danger"><FontAwesomeIcon icon={faTachometerAlt} /> {props.total} %</Badge>
    )
}
