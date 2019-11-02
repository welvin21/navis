import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import AppBar from "../components/AppBar";
import claimTypes from '../components/claimTypes'
import AllTransactions from "../components/AllTransactions";

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AppBar>

              <Route exact path="/" component={AllTransactions} />
              <Route exact path="/claimTypes" component={claimTypes} />
            
          </AppBar>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Index;
