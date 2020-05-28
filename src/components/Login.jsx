import React, { useState } from 'react'
import { firebase, auth } from '../firebase-config'
import { useHistory } from 'react-router-dom'
import '../assets/css/Login.css'

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(null);

    const history = useHistory();

    const validations = async (e) => {
        e.preventDefault();

        if(!email.trim()){
            setError('Ingrese Email');
            return
        }

        if(!password.trim()){
            setError('Ingrese Password')
            return
        }

        if(password.length < 6){
            setError('La contraseña debe contener más de 6 caracteres')
            return
        }

        setError(null);

        logIn()

    }

    const logIn = async () => {
        try{
            const res = await auth.signInWithEmailAndPassword(email, password)
            console.log(res.user)
            history.push('/home')
        }catch (error) {
            console.log(error)
            if(error.code === 'auth/wrong-password'){
                setError('Contraseña incorrecta')
            }
            else if(error.code === 'auth/user-not-found'){
                setError('Usuario no existe o Correo está mal escrito')
            }
        }
    }

    const signUpGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider)
        .then(() => {
            history.push('/home')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='container-login'>
            <div className='login-form'>
                <h1>Fight Covid-19</h1>
                <form onSubmit={validations}>
                    {
                        error && (
                            <div style={{color:'darkred'}}>
                                {error}
                            </div>
                        )
                    }
                    <input
                        id='mail'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Ingresa email...' 
                        type='email'
                        value={email}/>
                    <input 
                        id='pass'
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Ingresa contraseña'
                        type='password'
                        value={password}/>

                    <button className='register-button'>Iniciar Sesión</button>
                </form>
                <button className='google-button' onClick={signUpGoogle}>Google</button>
                <p className='register-link' onClick={() => history.push('/register')}>Crea tu cuenta aquí</p>
                

            </div>
        </div>
        
    )
}

export default Login

