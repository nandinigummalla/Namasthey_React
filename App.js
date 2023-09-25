import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement --> React Element -- js object  --> HTMl Element (render)
// const heading = React.createElement("h1", { id: "heading" }, "Namasthey React");   // As it's difficult to write will use jsx code from now

// jsx code is html like code and will have minor differences compared to html.. At the end jsx code converts to React code ( becoz js engines don't understand jsx)
const heading = <h1 id="heading">Namasthey React</h1>   // This will be transpiled to React code( React.createElement) with the help of Babel 

const multiLineHeading = (<h1 className="head" tabIndex="5">
    Namasthey
    React
    from Nandini
</h1>);  // Need to be binded in () when we write in multiple lines

// React Functional Components

const HeadingComponent1 = () => {
    return <h1>Functional Component 1 way</h1>
}

const HeadingComponent2 = () => <h1>Functional Component 2nd way</h1>

const HeadingComponent3 = () => (
    <h1>Functional Component 3rd way</h1>  //Most used way 
)

const Title = () => <h1>Namasthey React Title</h1>

// Component Composition  -- Composing two components in one together
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1>Components composed together -- Component Composition</h1>
    </div>
)




const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the React Elements
// root.render(multiLineHeading)  // On render the js object converts to html element

// To render React functional Components
root.render(<HeadingComponent />)