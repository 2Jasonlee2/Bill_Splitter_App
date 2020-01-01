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

    function genNameFields() {
        let arr = []
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
            <img src={person_icon} alt="Person" style={{width: 50, height: 50, backgroundColor:props.color}} />
            <p>{props.name}</p>

            {genNameFields()}
            <br />

        </div>
    )    
}

export default Person