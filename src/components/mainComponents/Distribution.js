/**
 * After the user has inputted all information, This final screen will
 * display each person again and show the total amount that each person
 * needs to pay.
 */

import React, {useEffect, useState} from "react"
import { NavLink } from "react-router-dom"
import FinalPerson from "./FinalPerson.js"

function Distribution(props) {
    const colors = ['tomato', 'dodgerBlue', 'violet', 'yellow', 'mediumSeaGreen', 'slateBLue', 'orange']
    const splitTip = (props.location.state.tip / props.location.state.countPeople)

    const [totalCost, setTotalCost] = useState(0)
    const [peopleDetails, setPeopleDetails] = useState([])

    /**
     * Will create peopleDetails array only once (componentDidMount effect)
     */
    useEffect(() => {setPeopleDetails(props.location.state.personList.map((p,i) => {
        return p === "" ? null : <FinalPerson name={p} 
                                                color={colors[i]}
                                                prices={props.location.state.prices[i]}
                                                tipAmount={splitTip}
                                                taxAmount={props.location.state.tax}
                                                addTotal={addTotal}
                                                key={i}
                                                id={i}/>
    }))}, [])

    function addTotal(cost) {
        setTotalCost(prevCost => prevCost + (+cost))
    }

    return (
        <div>
            <h2>- Final Amounts -</h2>
            {peopleDetails}
            <h2>Total Bill: ${totalCost.toFixed(2)}</h2>
            <button><NavLink to="/">Back To Start</NavLink></button>
        </div>
    )
}

export default Distribution