import React from "react"; // mandatory Components
import ReactDOM from "react-dom"; // mandatory Components

import "./styles.css";        // check styles.css for font align and font type

function App() {             
  return (
    <div className="App">
      <h1>Hello in React </h1>
      <h2>React coding starts!!</h2>
      <h3> Oct 8 [Day 1] </h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/* we write the above line as ReactDom.render(<class or function name (what u want to
render [display/build]),document.getElementById("root");*/