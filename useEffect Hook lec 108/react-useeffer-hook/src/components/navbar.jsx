import React from 'react'
import { useEffect } from 'react'
const navbar = (props) => {
    useEffect(() => {
        alert("i will run on every render of navbar")

    })

    useEffect(() => {
        alert("i will run on FIRST render of navbar")

    }, [])
    useEffect(() => {
        alert("color has beeen changed")

    }, [props.color])
   
    // clean up============================================= 
    useEffect(() => {
        return () => {
            alert("navbar is unmounted")
        };
    }, [])

    return (
        <div style={{ width: "100vw", height: "15vh", backgroundColor: props.color }}>
            hey there {props.color}
        </div>
    )
}

export default navbar
