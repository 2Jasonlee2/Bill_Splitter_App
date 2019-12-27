import React from "react"
import { NavLink } from "react-router-dom"

function Help() {
    return (
        <div>
            <h2>This will be the text that tells how app works</h2>
            <br />
            <button><NavLink to="/">BACK</NavLink></button>
        </div>
    )
}

export default Help