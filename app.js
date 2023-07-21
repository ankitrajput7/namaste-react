import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title1" }, "namaste react");
const heading2 = React.createElement("h2", { id: "title2" }, "namaste react");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(container);
