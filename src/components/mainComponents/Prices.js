import React from "react"
import { NavLink } from "react-router-dom"

function Prices() {
    return (
        <div>
            <h2>Enter the Prices: </h2>
            <button><NavLink to="/tax_tip">Continue</NavLink></button>
            <button><NavLink to="/">Back To Start</NavLink></button>
        </div>
    )
}

export default Prices