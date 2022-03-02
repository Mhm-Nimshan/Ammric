import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LocationRoute from "../Locations/LocationRoute";
import AddRoles from "../Security/AddRoles";
import AddUsers from "../Security/AddUsers";
import SecurityRoute from "../Security/SecurityRoute";

const AdminRoute = () => {
  return (
    <Switch>
      {/* <Route
        exact
        path="/Components/security/roles/edit"
        component={AddRoles}
      />
      <Route exact path="/Components/security/users/add" component={AddUsers} />
      <Route
        exact
        path="/Components/security/users/edit"
        component={AddUsers} */}
      />
      <Route
        exact
        path="/Components/security/roles"
        component={SecurityRoute}
      />
      <Route
        exact
        path="/Components/locations/council"
        component={LocationRoute}
      />
      <Redirect to="/admin/location/councils" />
    </Switch>
  );
};

export default AdminRoute;
