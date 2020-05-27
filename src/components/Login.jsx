import React, { useState } from 'react'
import { firebase, auth } from '../firebase-config'
import { useHistory } from 'react-router-dom'
import logo from '../assets/img/logo.png'
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

    const signUp = () => {
        history.push('/register')
    }

    return (
        <div className='container-login'>
                <img alt="logo" src={logo} /> 
            <div className='login-form'>
                <h1>Iniciar Sesión</h1>
                <form onSubmit={validations}>
                    {
                        error && (
                            <div style={{color:'darkred'}}>
                                {error}
                            </div>
                        )
                    }
                    <input
                        onChange={(e) => setEmail(e.target.value)} 
                        type='email'
                        value={email}/>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        value={password}/>

                    <button>Entrar</button>
                </form>
                <button onClick={signUp}>Registrate</button>
                <button onClick={signUpGoogle}>Google</button>
            </div>
        </div>
        
    )
}

export default Login

