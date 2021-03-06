import React, { Component } from "react";
import Listing from "./components/Listing";
import Header from "./components/Header";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Listing />
      </div>
    );
  }
}

export default App;
