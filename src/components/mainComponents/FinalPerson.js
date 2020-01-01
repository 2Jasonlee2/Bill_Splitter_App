import React from "react"
import person_icon from "../../person_icon.png"

function DisplayPerson(props) {
    let finalPrices = 0.0
    for(let i = 0; i < props.prices.length; i++) {
        if(props.prices[i] !== "") {
            finalPrices += +props.prices[i]
        }
    }

    
    const finalAmount = (+finalPrices + (+finalPrices * (+props.taxAmount/100)) + +props.tipAmount).toFixed(2)

    return (
        <div>
            <img src={person_icon} alt="Person" style={{width: 50, height: 50, backgroundColor:props.color}} />
            <p>{props.name}</p>
            <p>final contribution: {finalAmount}</p>
            <br />
        </div>
    )   
}

export default DisplayPerson