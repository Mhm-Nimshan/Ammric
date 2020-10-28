import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



import './App.css';
import Header from "./Components/Header"
import SideBar from "./Components/Sidebar"
import Location from "./Components/Locations"
import Programs from "./Components/Programs"
import Parameters from "./Components/Parameters"
import Settings from "./Components/Settings"
import Security from "./Components/Security"

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
            <Route path={PATH.LOCATIONS} >
              <Location test={"str"} />
            </Route>
            <Route path={PATH.PROGRAMS} component={Programs} />
            <Route path={PATH.PARAMETERS} component={Parameters} />
            <Route path={PATH.SETTINGS} component={Settings} />
            <Route path={PATH.SECURITY} component={Security} />
          </Switch>


        </div>


      </Router>
    </div>
  );
}

export default App;
