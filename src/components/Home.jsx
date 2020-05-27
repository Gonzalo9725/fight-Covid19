import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Modal, Button } from 'react-bootstrap';
import '../assets/css/Home.css'

const Home = () => {

    const [data, setData] = useState([])
    const [currentUser, setCurrentUser] = useState({name:{}})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (user) =>{
        setCurrentUser(user)
        setShow(true);
    } 

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://randomuser.me/api/?results=10')
        const users = await data.json()
        setData(users.results);
    }

    return (
        <>
        <NavBar/>

        <div style={{paddingTop: '6em'}}>
            {
                data.map( (user, i) => (
                    <div key={i}>
                    <p>{user.gender} - {user.name.first}</p>
                    <button onClick={()=>handleShow(user)}>Ver Información</button>
                    </div>
                ))
            }
        </div>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{currentUser.name.first}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home