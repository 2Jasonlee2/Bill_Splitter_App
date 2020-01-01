import React from "react"
import { NavLink } from "react-router-dom"
import Person from "./Person.js"

function Prices(props) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    const prices = [[],[],[],[],[]]

    function updatePrices(i, arr) {
        prices[i] = arr
    }

    const peopleDetails = props.location.state.people.map((p,i) => {
        return p === "" ? null : <Person name={p}
                                         color={colors[i]}
                                         key={i}
                                         id={i}
                                         updatePrices={updatePrices}/>
    })

    return (
        <div>
            <h2>Enter prices of items for each person</h2>
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