import React, { Component } from "react";
import "./App.css";
import DOCUMENT from "./DOCUMENT";

class App extends Component {
  render() {
    const document = DOCUMENT;

    return (
      <div className="App">
        <p>Render the document here</p>
        <pre>{JSON.stringify(document, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
