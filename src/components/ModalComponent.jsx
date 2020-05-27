import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = (props) => {

    return (
        <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent
