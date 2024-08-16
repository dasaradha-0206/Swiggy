import React from "react"
import ReactDOM from "react-dom/client"
import Nabar from "./src/components/navbar"
import Body from "./src/components/body"
import Details from "./src/components/details"
const AppLayOut=()=>{
    return <div className="app-layout">
        <Nabar/>
        <Body/>
        <Details/>

    </div>
}
const root=ReactDOM.createRoot(document.getElementById("box"))
root.render(<AppLayOut/>)