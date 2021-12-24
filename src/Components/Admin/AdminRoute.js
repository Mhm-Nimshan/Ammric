import React from 'react'

import { Redirect, Route, Switch } from "react-router-dom"

const AdminRoute = () => {
    return (
        <Switch>
            <Route exact path="/locations/council" component={Council} />
            <Route exact path="/locations/communities" component={Communities} />
            <Route exact path="" component={} />
            <Route exact path="" component={} />
            <Route exact path="" component={} />
            <Route exact path="" component={} />
            <Redirect to="" />
        </Switch>
    )
}

export default AdminRoute