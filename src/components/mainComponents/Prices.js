import React from "react"
import { NavLink } from "react-router-dom"

function Prices(props) {
    //console.log(props.location.state.countPeople)
    //console.log(props.location.state.people)
    return (
        <div>
            <h2>Enter the Prices: </h2>
            <button><NavLink to="/tax_tip">Continue</NavLink></button>
            <button><NavLink to="/">Back To Start</NavLink></button>
        </div>
    )
}

export default Prices