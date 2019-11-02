import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import AppBar from "../components/AppBar";
import AllTransactions from "../components/AllTransactions";
import MakeClaim from "../components/MakeClaim";
import SellerForm from "../forms/SellerForm.js";

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AppBar>
            <Route exact path="/" component={AllTransactions} />
            <Route exact path="/allTransactions" component={AllTransactions} />
            <Route exact path="/makeClaim" component={MakeClaim} />
            <Route exact path="/openSellerForm" component={SellerForm} />
          </AppBar>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Index;
