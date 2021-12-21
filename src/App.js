import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'react-checkbox-tree/lib/react-checkbox-tree.css';


import './App.css';
import PathView from "./Components/HOC/PathView"
import Header from "./Components/Header"
import SideBar from "./Components/Sidebar"
import LocationRoute from "./Components/Locations/LocationRoute"
import Programs from "./Components/Programs"
import Parameters from "./Components/Parameters"
import Settings from "./Components/Settings"
import SecurityRoute from "./Components/Security/SecurityRoute"
import Home from "./Components/Home"
import Admin from "./Components/Admin";


// import path constant
import PATH from "./Constant"





function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="mainContainer">
          <SideBar />
          <Switch>
            <Route path={PATH.HOME} component={PathView(Home)} />
            <Route path={PATH.ADMIN} component={PathView(Admin)} />
            <Route path={PATH.LOCATIONS} component={PathView(LocationRoute)} />
            <Route path={PATH.PROGRAMS} component={PathView(Programs)} />
            <Route path={PATH.PARAMETERS} component={PathView(Parameters)} />
            <Route path={PATH.SETTINGS} component={PathView(Settings)} />
            <Route path={PATH.SECURITY} component={PathView(SecurityRoute)} />
          </Switch>

        </div>


      </Router>
    </div>
  );
}


export default App;
