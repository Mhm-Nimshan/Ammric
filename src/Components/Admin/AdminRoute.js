import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LocationRoute from "../Locations/LocationRoute";

const AdminRoute = () => {
  return (
    <Switch>
      <Route exact path="" />
      <Route exact path="/Components/security/roles" />
      <Route exact path="/Components/locations/council" i />
      <Redirect to="/admin/Locations/councils" />
    </Switch>
  );
};

export default AdminRoute;
