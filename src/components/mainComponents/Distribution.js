import React from "react"
import { NavLink } from "react-router-dom"

function Distribution(props) {
    return (
        <div>
            <h2>Final Amounts: </h2>
            <button><NavLink to="/">Back To Start</NavLink></button>
        </div>
    )
}

export default Distribution