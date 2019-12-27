import React, {useState} from "react"
import  { NavLink } from "react-router-dom"

function Start() {
    // State variable: array of people that split the bill
    const [people, setPeople] = useState([])

    return (
        <div>
            <h2>Get Started! Enter how many people: </h2>

            <button><NavLink to="/prices">Continue</NavLink></button>
            <button><NavLink to="/help">Help</NavLink></button>
        </div>
    )
}

export default Start