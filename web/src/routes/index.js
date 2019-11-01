import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import AppBar from "../components/AppBar";
import claimTypes from '../components/claimTypes'
import allClaims from "../components/allClaims";

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AppBar>

              <Route exact path="/" component={allClaims} />
              <Route exact path="/claimTypes" component={claimTypes} />
            
          </AppBar>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Index;
