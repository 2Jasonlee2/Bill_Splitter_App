import React from "react"
import { NavLink } from "react-router-dom"
import FinalPerson from "./FinalPerson.js"

function Distribution(props) {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    const splitTip = (props.location.state.tip/props.location.state.countPeople)

    const peopleDetails = props.location.state.personList.map((p,i) => {
        return p === "" ? null : <FinalPerson name={p} 
                                              color={colors[i]}
                                              prices={props.location.state.prices[i]}
                                              tipAmount={splitTip}
                                              taxAmount={props.location.state.tax}
                                              key={i}
                                              id={i}/>
    })

    return (
        <div>
            <h2>Final Amounts</h2>
            {peopleDetails}
            <button><NavLink to="/">Back To Start</NavLink></button>
        </div>
    )
}

export default Distribution