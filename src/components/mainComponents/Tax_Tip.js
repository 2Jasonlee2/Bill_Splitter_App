import React from "react"
import { NavLink } from "react-router-dom"

function Tax_Tip(props) {
    return (
        <div>
            <h2>Tax Amount? Tip Amount?</h2>
            <button><NavLink to="/distribution">Finish</NavLink></button>
            <button><NavLink to="/">Back To Start</NavLink></button>
        </div>
    )
}

export default Tax_Tip