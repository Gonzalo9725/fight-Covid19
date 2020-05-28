import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase-config'
import menu from '../assets/img/menu.png'
import logo from '../assets/img/logo.png'
import '../assets/css/NavBar.css'

const NavBar = () => {

    const history = useHistory();
   
    const closeSession = () => {
        auth.signOut()
        
        .then(() => {
            
            console.log('Saliendo');
            history.push("/")
            
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
        <div className='container-nav'> 
            <img className="logo" alt="logo" src={logo} />
            <div className='dropdown'>
            <img className="menu" alt="menu" src={menu} />  
                <div className='dropdown-content'>
                    <p>Ver mi perfil</p>
                    <p onClick={() => closeSession()} >Cerrar Sesión</p>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default NavBar
