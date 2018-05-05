import React, { Component } from "react";
import Home from "./components/Home";
import Main from "./components/Mainpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mainpage" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;
