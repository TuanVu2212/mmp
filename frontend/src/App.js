import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Report from "./report";
import Shorten from "./shorten";
import Campaign from "./campaign";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/landingpage">
          <LandingPage />
        </Route>
        <Route exact path="/report">
          <Report />
        </Route>
        <Route exact path="/shorten">
          <Shorten />
        </Route>
        <Route exact path="/:id">
          <Campaign />
        </Route>
        <Route exact path="/page/notfound">
          <div>Link not found!</div>
        </Route>
        <Route
          exact
          path="/page/external"
          component={() => {
            window.location.href = "http://alvatech.vn";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
