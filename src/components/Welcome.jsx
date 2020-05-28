import React from 'react'
import Medicine from '../assets/img/medicine.svg'
import '../assets/css/Welcome.css'

const Welcome = () => {
    return (
        <div className='welcome-container'>
            <div className='welcome-title'>
                <p className='title'>You're in <em>exactly</em> the right place to fight Covid-19</p>
                <p className='sub-title'>They want to help</p>
            </div>
            <img src={Medicine} alt="Doctors"/>
        </div>
    )
}

export default Welcome
