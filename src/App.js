import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import HarryContainer from "./HarryContainer";
import logo from "./logo.svg";

const houses = ["Serpentard", "Griffondor", "Serdaigle", "Pouffsoufle"];
const reducer = (state, action) => ({
  houses,
  selectedHouses: houses[Math.floor(Math.random() * 4)]
});
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Choixpeau</p>
        </header>
        <Provider store={store}>
          <HarryContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
