import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Stars = (props) => {

    return (
        props.stars >= 75 ? (
            <span className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </span>
        ) : props.stars < 75 && props.stars >= 55 ? (
            <span className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </span>
        ) : props.stars < 55 && props.stars >= 30 ? (
            <span className="star">
                <FontAwesomeIcon icon={faStar} />
            </span>
        ) : (
            <span></span>
        )
    )
}
