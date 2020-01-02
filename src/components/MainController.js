/**
 * The main component of the web app. I set up all of the routes here
 * with the start of the app leading to the "Start" component. If another
 * route is triggered will show here.
 */

import React from "react"
import { Route, HashRouter } from "react-router-dom"

import Start from "./mainComponents/Start.js"
import Prices from "./mainComponents/Prices.js"
import Tax_Tip from "./mainComponents/Tax_Tip.js"
import Distribution from "./mainComponents/Distribution.js"
import Help from "./mainComponents/Help.js"

function MainController() {
    return (
        <HashRouter>
            <div>
                <div>
                    <Route exact path="/" component={Start}/>
                    <Route path="/prices" component={Prices}/>
                    <Route path="/tax_tip" component={Tax_Tip}/>
                    <Route path="/distribution" component={Distribution}/>
                    <Route path="/help" component={Help}/>
                </div>
            </div>
        </HashRouter>
    )
}

export default MainController