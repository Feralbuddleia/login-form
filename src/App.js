import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Account from "./components/Account";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Login} />
            <Route path="/account" component={Account} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
