import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Modal, Button } from 'react-bootstrap';
import ModalComponent from './ModalComponent'
import '../assets/css/Home.css'

const Home = () => {

    const [data, setData] = useState([])
    const [currentUser, setCurrentUser] = useState({name:{}})
    const [modalShow, setModalShow] = useState(false);

    const handleShow = (user) =>{
        setCurrentUser(user)
        setModalShow(true)
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

        <div className='home-page' style={{paddingTop: '6em'}}>
            {
                data.map( (user, i) => (
                    <div key={i} className='user-card'>
                        <img src={user.picture.large} alt='health worker'/>
                        <div className='user-info'> 
                            <p>{user.name.title}. {user.name.first} {user.name.last}, {user.dob.age}</p>
                            <button onClick={() => handleShow(user)}>Ver Información</button>
                        </div>
                    </div>
                ))
            }
        </div>
        <ModalComponent
            show={modalShow} 
            onHide={() => setModalShow(false)}
            user={currentUser}
            title={currentUser.name.first} />
        </>
    )
}

export default Home