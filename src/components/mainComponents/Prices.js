/**
 * Phase 2 of my web app, after user enters in the people splitting bill
 * they can enter in the separate expenses of each person. Will create
 * "Person" component for each person, and data is then passed to "Tax_Tip" 
 * component
 */

import React from "react"
import { NavLink } from "react-router-dom"
import Person from "./Person.js"

function Prices(props) {
    const colors = ['tomato', 'dodgerBlue', 'violet', 'yellow', 'mediumSeaGreen', 'slateBLue', 'orange']
    const prices = [[],[],[],[],[]]

    // gets passed to Person component to update prices array here
    function updatePrices(i, arr) {
        prices[i] = arr
    }

    // creates array of people with price boxes underneath
    const peopleDetails = props.location.state.people.map((p,i) => {
        return p === "" ? null : <Person name={p}
                                         color={colors[i]}
                                         key={i}
                                         id={i}
                                         updatePrices={updatePrices}/>
    })

    return (
        <div>
            <h2>- Enter prices of items for each person -</h2>
            <br />

            {peopleDetails}

            <button>
                <NavLink to={{pathname:"/tax_tip",
                            state: {personList: props.location.state.people,
                                    prices: prices,
                                    countPeople: props.location.state.countPeople}}}>
                    Continue
                </NavLink>
            </button>
            <button><NavLink to="/">Back To Start</NavLink></button>
        </div>
    )
}

export default Prices