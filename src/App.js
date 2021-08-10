import {HashRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";

const App = () => (
  <Router basename="/">
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/resume">
        <Resume/>
      </Route>
    </Switch>
  </Router>
)

export default App;
