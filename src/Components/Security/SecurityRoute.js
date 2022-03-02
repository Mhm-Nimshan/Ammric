import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Users from "./Users";
import Roles from "./index";
import AddRoles from "./AddRoles";
import AddUsers from "./AddUsers";

const SecurityRoute = () => {
  return (
    <Switch>
      <Route path="/security/roles" component={Roles} />
      <Route exact path="/security/roles/add" component={AddRoles} />
      <Route exact path="/security/roles/edit" component={AddRoles} />
      <Route exact path="/security/users" component={Users} />
      <Route exact path="/security/users/add" component={AddUsers} />
      <Route exact path="/security/users/edit" component={AddUsers} />
      <Redirect to="/security/roles" />
    </Switch>
  );
};

export default SecurityRoute;
