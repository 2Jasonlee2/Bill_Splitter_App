import React from "react"
import { Route, NavLink, HashRouter } from "react-router-dom"

import Header from "./components/Header.js"
import Start from "./components/mainComponents/Start.js"
import Help from "./components/mainComponents/Help.js"

function App() {
    return (
        <div>
            <Header />
            <HashRouter>
                <div>
                    <ul>
                        <li><NavLink to="/">Start</NavLink></li>
                        <li><NavLink to="/help">Help</NavLink></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={Start}/>
                        <Route path="/help" component={Help}/>
                    </div>
                </div>
            </HashRouter>
        </div>
    )
}

export default App