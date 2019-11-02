import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import AppBar from "../components/AppBar";
import AllTransactions from "../components/AllTransactions";
import MakeClaim from "../components/MakeClaim";

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AppBar>
            <Route exact path="/" component={AllTransactions} />
            <Route exact path="/makeClaim" component={MakeClaim} />
          </AppBar>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Index;
