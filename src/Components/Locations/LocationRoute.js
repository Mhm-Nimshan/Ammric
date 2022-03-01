import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import Communities from "./Communities";
import Council from "./index";
import AddCouncil from "./AddCouncil";
import AddCommunities from "./AddCommunities";
const LocationRoute = () => {
  return (
    <Switch>
      <Route path="/locations/council/edit" component={AddCouncil} />
      <Route path="/locations/council" component={Council} />
      <Route path="/locations/communities" component={Communities} />
      <Route path="/locations/council/add" component={AddCouncil} />
      <Route path="/locations/communities/add" component={AddCommunities} />
      <Route path="/locations/communities/edit" component={AddCommunities} />
      <Redirect to="/locations/council" />
    </Switch>
  );
};

export default LocationRoute;
