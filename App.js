import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

const parents = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "Child1" }, [
    React.createElement("h1", {}, "I am a h1 Tag"),
    React.createElement("h2", {}, "I am a h2 Tag"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "I am a h1 Tag"),
    React.createElement("h2", {}, "I am a h2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parents);
