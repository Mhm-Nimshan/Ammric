import React from 'react'

import { Redirect, Route, Switch } from "react-router-dom"


import Communities from "./Communities"
import Council from "./index"
import AddCouncil from "./AddCouncil"
import AddCommunities from "./AddCommunities"
const LocationRoute = () => {
    return (
        <Switch>
            <Route exact path="/locations/council" component={Council} />
            <Route exact path="/locations/communities" component={Communities} />
            <Route exact path="/locations/council/add" component={AddCouncil} />
            <Route exact path="/locations/council/edit" component={AddCouncil} />
            <Route exact path="/locations/communities/add" component={AddCommunities} />
            <Route exact path="/locations/communities/edit" component={AddCommunities} />
            <Redirect to="/locations/council" />
        </Switch>
    )
}

export default LocationRoute
