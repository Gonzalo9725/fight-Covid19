import React, { useState } from 'react'
import { auth } from '../firebase-config'
import { useHistory } from 'react-router-dom'
import '../assets/css/Register.css'

const Register = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(null);

    const history = useHistory();

    const signIn = async (e) => {
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
        createAccount()
    }

    const createAccount = async() => {
        try{
            const res = await auth.createUserWithEmailAndPassword(email, password)
            console.log(res.user);
            alert('Se ha creado correctamente la cuenta');
            history.push('/login')
        }catch (error) {
            console.log('error')
        }
    }

    return (
        <div className='container-register'>
            <div className='register-form'>
                <h1>Crear cuenta</h1>
                <form onSubmit={signIn}>
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
                        placeholder='Ingresa email...' 
                        value={email}/>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Ingresa contraseña'
                        value={password}/>

                    <button className='register-button'>Registrarse</button>
                </form>
            </div>
        </div>
    )
}

export default Register