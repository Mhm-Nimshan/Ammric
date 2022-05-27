import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom"

import Users from "./Users"
import Roles from "./index"
import AddRoles from "./AddRoles"
import AddUsers from "./AddUsers"
import UpdateUsers from './UpdateUsers'
import Security from './Security'


const SecurityRoute = () => {
    return (
        <Switch>
            <Route exact path="/Security" component={Security} />
            <Route exact path="/Security/Roles" component={Roles} />
            <Route exact path="/Security/Roles/Add" component={AddRoles} />
            <Route exact path="/Security/Roles/Edit" component={AddRoles} />
            <Route exact path="/Security/Users" component={Users} />
            <Route exact path="/Security/Users/Add" component={AddUsers} />
            <Route exact path="/Security/Users/Edit" component={AddUsers} />
            <Route exact path="/Security/Users/Update" component={UpdateUsers} />
            <Redirect to="/Security/Roles" />
        </Switch>
    )
}

export default SecurityRoute
