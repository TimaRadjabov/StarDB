import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { SwapiProvider } from "../swapiContext";
import StarApi from "../../service";

import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";

import "./app.scss";
import PeoplePage from "../../pages/peoplePage";
import PlanetsPage from "../../pages/planetsPage";
import StarshipPage from "../../pages/starshipsPage";

const App = () => {
  const starApi = new StarApi();
  return (
    <div className="wrapper">
      <SwapiProvider value={starApi}>
        <Router>
          <Header />
          <ErrorBoundary>
            <RandomPlanet />
          </ErrorBoundary>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <h2 className="main__title">Wellcome to StarDB</h2>}
            />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starship" exact component={StarshipPage} />
            <Route render={() => <h2>Page not found</h2>} />
          </Switch>
        </Router>
      </SwapiProvider>
    </div>
  );
};

export default App;
