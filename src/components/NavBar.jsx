import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase-config'
import profile from '../assets/img/user.png'
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
            <h1>navbar</h1> 
            <div className='dropdown'>
            <img className="photo" alt="fotoperfil" src={profile} />    
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
