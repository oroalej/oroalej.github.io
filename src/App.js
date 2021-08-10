import {HashRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import tw from "twin.macro";

const App = () => (
  <div css={tw`bg-gray-100 dark:bg-gray-800 transition-colors duration-200 ease-in-out`}>
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
  </div>
)

export default App;
