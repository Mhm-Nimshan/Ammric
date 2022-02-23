import Sidebar from "../Sidebar";
import React from "react";
import { withRouter } from "react-router-dom";
import path from "../../Constant";
import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import PathView from "../HOC/PathView";
import LocationRoute from "../Locations/LocationRoute";
import SecurityRoute from "../Security/SecurityRoute";

const Admin = () => {
  return (
    <Switch>
      <Route path="/admin/locations" component={PathView(LocationRoute)} />
      <Route path="/admin/security" component={PathView(SecurityRoute)} />
      <Route />
    </Switch>
  );
};

export default Admin;
