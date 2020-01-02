/**
 * After user enters in the expenses of each person, they can enter
 * in the tax percentage and tip amount. Tip is split evenly between
 * each person regardless of their expenses. All the data is then passed
 * to "Distribution" component 
 */

import React, {useState} from "react"
import { NavLink } from "react-router-dom"

function Tax_Tip(props) {

    const [tax, setTax] = useState("")
    const [tip, setTip] = useState("")

    return (
        <div>
            <h2>Tax Percentage?</h2>
            <input type="number"
                   name="tax"
                   placeholder={"Enter tax %"}
                   value={tax}
                   onChange={event => setTax(+event.target.value)}
                   min={0} />

            <h2>Tip Amount?</h2>
            <input type="number"
                   name="tip"
                   placeholder={"Enter tip amount"}
                   value={tip}
                   onChange={event => setTip(+event.target.value)}
                   min={0} />
            <br />
            <br />
            <button>
                <NavLink to={{pathname:"/distribution",
                            state: {personList: props.location.state.personList,
                                    prices: props.location.state.prices,
                                    countPeople: props.location.state.countPeople,
                                    tax: tax,
                                    tip: tip}}}>
                    Continue
                </NavLink>
            </button>
            <button><NavLink to="/">Back To Start</NavLink></button>
        </div>
    )
}

export default Tax_Tip