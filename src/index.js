import React from "react";
import ReactDOM from "react-dom";

import ItemGrid from "./ItemGrid";

import "./styles.css";

function App() {
  return (
    <div>
      <ItemGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
