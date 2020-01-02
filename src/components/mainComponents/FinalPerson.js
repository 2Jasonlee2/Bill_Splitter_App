import React from "react"
import person_icon from "../../person_icon.png"

function DisplayPerson(props) {
    // find the total of user expenses
    let finalPrices = 0.0
    for(let i = 0; i < props.prices.length; i++) {
        if(props.prices[i] !== "") {
            finalPrices += +props.prices[i]
        }
    }

    // final cost factoring in tip and tax to person's expenses
    const finalAmount = (+finalPrices + (+finalPrices * (+props.taxAmount/100)) + +props.tipAmount).toFixed(2)

    props.addTotal(finalAmount)

    return (
        <div>
            <img src={person_icon} alt="Person" style={{backgroundColor:props.color}} />
            <h4>{props.name}</h4>
            <p>final amount owed: ${finalAmount}</p>
        </div>
    )   
}

export default DisplayPerson