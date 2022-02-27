import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Agegroup from "./Agegroup";
import Breed from "./Breed";
import Gender from "./Gender";
import species from "./Species";

const AnimalDetailRouter = () => {
  return (
    <Switch>
      <Route path="/animaldetails/species" component={species} />
      <Route path="/animaldetails/breed" component={Breed} />
      <Route path="/animaldetails/gender" component={Gender} />
      <Route path="/animaldetails/age group" component={Agegroup} />
      {/* <Route path ="/animaldetails/size" component={}/>
      <Route path ="/animaldetails/Repro%20status" component={}/>
      <Route path ="/animaldetails/Microchip" component={}/>
      <Route path ="/animaldetails/Colour" component={}/> */}
    </Switch>
  );
};

export default AnimalDetailRouter;
