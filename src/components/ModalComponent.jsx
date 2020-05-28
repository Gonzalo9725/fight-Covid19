import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faBuilding, faAddressCard, faGlobeAmericas, faThumbtack, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/Modal.css'

const ModalComponent = (props) => {

    return (
        <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.user.name.first} {props.user.name.last}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <FontAwesomeIcon icon={faGlobeAmericas} />
                        <strong> País: </strong>{props.user.location.country}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faThumbtack} />
                        <strong> Estado: </strong>{props.user.location.state}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faBuilding} />
                        <strong> Ciudad: </strong>{props.user.location.city}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faHome} />
                        <strong> Dirección: </strong>{props.user.location.street.name}, {props.user.location.street.number}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <strong> Email: </strong><a href={`mailto:${props.user.email}`}>{props.user.email}</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <strong> Number: </strong><a href={`tel:${props.user.cell}`}>{props.user.cell}</a>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent
