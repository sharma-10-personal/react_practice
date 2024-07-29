const parentdiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "this is heading")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentdiv);
