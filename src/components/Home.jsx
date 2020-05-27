import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import '../assets/css/Home.css'

const Home = () => {

    const [data, setData] = useState([])

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
        <div>
            {
                data.map( (user, i) => (
                    <p key={i}>{user.gender} - {user.name.first}</p>
                ))
            }
        </div>
        </>
    )
}

export default Home