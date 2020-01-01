/**
 * Main Component that loads the Header and the Main Component.
 * The Main Component changes while the header remains static.
 */

import React from "react"

import Header from "./components/Header.js"
import MainController from "./components/MainController.js"
import "./styles/buttonStyle.css"

function App() {
    return (
        <div>
            <Header />
            <MainController />
        </div>
    )
}

export default App