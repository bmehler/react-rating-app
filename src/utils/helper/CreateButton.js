import React from 'react';
import { Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash, faTimes, faTrash, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
    faEye,
    faEyeSlash,
    faTimes,
    faTrash,
    faEdit,
    faPlus
);

export const CreateButton = (props) => {
    return (
        <Button type={props.submit} onClick={props.handle || null} id={props.id} className={props.class} variant={props.variant}><FontAwesomeIcon icon={['fa', props.icon]} /> {props.text}</Button>
    )
}
