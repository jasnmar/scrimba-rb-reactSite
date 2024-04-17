import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function Page() {
    return (
        <ol>
            <li>Jobs</li>
            <li>Update my Site</li>
            <li>Fun</li>
        </ol>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))