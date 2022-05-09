import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LocationRoute from "../Locations/LocationRoute";

const AdminDetailsRouter = () => {
  return (
    <Switch>
      <Route path="/components/location" component={location} />
    </Switch>
  );
};

export default AdminDetailsRouter;
