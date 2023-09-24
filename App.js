const heading = React.createElement("h1", { id: "heading" }, "Hello World using React!!!");
// const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hie I m h1 tag with parent child combo")))
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hie I m h1 tag with siblings"), React.createElement("h2", {}, "Hie I m h2 tag with siblings")]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// createElement is a object  and when we render it then the it will convert to html tag and pass to root element