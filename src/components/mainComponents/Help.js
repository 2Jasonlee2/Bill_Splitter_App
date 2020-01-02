import React from "react"
import { NavLink } from "react-router-dom"

function Help() {
    return (
        <div>
            <h2>About</h2>
            <p style={{fontSize: "20px"}}>
                This app was created to aid in splitting bills between people.
            </p>
            <br />
            <h2>How to Use</h2>
            <p style={{margin: "0px 600px 20px 600px", fontSize: "20px"}}>
                Start by choosing how many people are splitting the bill and entering each person's name.
                Each person will be displayed and have a list of expenses. Enter in the expenses of each
                person. On the next screen, enter in tax/tip if applicable (tip will be evenly split).
                Click "Finish" to see how the bill should be split!
            </p>
        <br />
        <button><NavLink to="/">BACK</NavLink></button>
        </div>
    )
}

export default Help