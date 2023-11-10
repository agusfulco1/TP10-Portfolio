import '../Styles/Home.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Home() {
    const [creacionesArr, setCreaciones] =  useState([])
    useEffect(() => {
        let array = []
        axios.get('http://localhost:3000/creaciones.json')
        .then((response) => {
            array = response.data
            console.log(response.data)
        })
    }, [])
    
    return (
        <div className="background">
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            <h2>Hola</h2>
            
        </div>
    )
}