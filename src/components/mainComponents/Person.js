import React, {useState} from "react"
import person_icon from "../../person_icon.png"

function Person(props) {
    const [prices, setPrices] = useState(["", "", "", "", ""])

    function handleChange(event) {
        const {id, value} = event.target
        let newPrices = prices.map((p,i) => i===+id ? +value : p)
        setPrices(newPrices)
        props.updatePrices(props.id, newPrices)
    }

    /**
     * This function genereates the fields to enter in the prices of items for each person
     */
    function genNameFields() {
        let arr = []
        // item count is limited to 5 for now
        for(let i = 0; i < 5; i++) {
            arr.push(
                    <div key={i}>
                        <input type="number"
                                name="item"
                                placeholder={"Enter item #" + (+i+1) + "'s price"}
                                value={prices[i]}
                                min={0}
                                onChange={handleChange}
                                id={i}
                                key={i} />
                        <br />
                    </div>
                    )
        }
        return arr
    }

    return (
        <div>
            <img src={person_icon} alt="Person" style={{backgroundColor: props.color}} />
            <h4>{props.name}</h4>

            {genNameFields()}
            <br />

        </div>
    )    
}

export default Person