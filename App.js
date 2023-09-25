import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement --> React Element -- js object  --> HTMl Element (render)
// const heading = React.createElement("h1", { id: "heading" }, "Namasthey React");   // As it's difficult to write will use jsx code from now

// jsx code is html like code and will have minor differences compared to html.. At the end jsx code converts to React code ( becoz js engines don't understand jsx)
const heading = <h1 id="heading">Namasthey React</h1>   // This will be transpiled to React code( React.createElement) with the help of Babel 

const multiLineHeading = (<h1 className="head">
    Namasthey
    React
    from Nandini
</h1>);  // Need to be binded in () when we write in multiple lines

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(multiLineHeading)  // On render the js object converts to html element