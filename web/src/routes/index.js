import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import AppBar from "../components/AppBar";
import SellerBar from "../components/SellerBar";
import AllTransactions from "../components/AllTransactions";
import MakeClaim from "../components/MakeClaim";
import Notifications from "../components/Notifications";

import SellerForm from "../forms/SellerForm.js";

class Index extends React.Component {
  AppBarLayout = props => {
    return (
      <Switch>
        <AppBar>
          <Route exact path="/" component={AllTransactions} />
          <Route exact path="/makeClaim" component={MakeClaim} />
          <Route exact path="/notifications" component={Notifications} />
        </AppBar>
      </Switch>
    );
  };

  SellerLayout = () => {
    return (
      <SellerBar>
        <Switch>
          <Route exact path="/seller/openSellerForm" component={SellerForm} />
        </Switch>
      </SellerBar>
    );
  };

  render() {
    const { AppBarLayout, SellerLayout } = this;
    return (
      <Switch>
        <Route path="/seller" component={SellerLayout} />
        <Route path="/" component={AppBarLayout} />
      </Switch>
    );
  }
}

export default Index;
