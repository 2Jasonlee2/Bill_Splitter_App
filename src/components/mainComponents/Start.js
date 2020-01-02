/**
 * The start screen of the main component. Allows user to choose the num of
 * people splitting the bill and also input names of each person. The data is
 * carried to the "Prices" component
 */

import React from "react"
import  { NavLink } from "react-router-dom"


class Start extends React.Component {
    constructor() {
        super()
        this.state = {
            countPeople: "",
            people: ["", "", "", "", ""]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {id, name, value} = event.target
        if(name === "countPeople") {
            this.setState({ [name] : +value })
        }
        else {
            let newPeople = this.state.people.map((p, ind) => ind === +id ? value : p)
            this.setState({ [name] : newPeople })
        }
    }

    genNameFields() {
        let arr = []
        for(let i = 0; i < +this.state.countPeople; i++) {
            arr.push(
                    <div key={i}>
                        <input type="text"
                                name="people"
                                placeholder={"Enter person #" + (+i+1) + "'s name"}
                                value={this.state.people[i]}
                                onChange={this.handleChange}
                                id={i}
                                key={i} />
                        <br />
                    </div>
                     )
        }
        return arr
    }

    render() {
        return (
            <div>
                <h2>Welcome to the Bill Splitter Application!</h2>
                <h3>Get started by selecting the number of people splitting the bill</h3>
                <form>
                    <label>
                        <input type="radio"
                                name="countPeople"
                                checked={this.state.countPeople === 2}
                                onChange={this.handleChange}
                                value={2}
                        /> 2
                    <label>
                    </label>
                        <input type="radio"
                                name="countPeople"
                                checked={this.state.countPeople === 3}
                                onChange={this.handleChange}
                                value={3}
                        /> 3
                    <label>
                    </label>
                        <input type="radio"
                                name="countPeople"
                                checked={this.state.countPeople === 4}
                                onChange={this.handleChange}
                                value={4}
                        /> 4
                    <label>
                    </label>
                        <input type="radio"
                                name="countPeople"
                                checked={this.state.countPeople === 5}
                                onChange={this.handleChange}
                                value={5}
                        /> 5
                    </label>
                    <br />

                {/** If # people have been entered show table to input names */}
                {this.state.countPeople === "" ? null : <h3>Enter the people's names below</h3>}
                {this.genNameFields()}
                </form>
                <br />

                <button>
                    <NavLink to={{pathname:"/prices",
                             state: this.state}}>
                        Continue
                    </NavLink>
                </button>

                <button><NavLink to="/help">Help</NavLink></button>
            </div>
        )
    }
}

export default Start