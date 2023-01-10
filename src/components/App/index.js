import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SwapiProvider } from "../swapiContext";
import StarApi from "../../service";

import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../../pages/peoplePage";
import PlanetsPage from "../../pages/planetsPage";
import StarshipPage from "../../pages/starshipsPage";
import Wellcome from "../../pages/wellcomePage";

import "./app.scss";
import NotFoundPage from "../../pages/notFoundPage";

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
          <Routes>
            <Route path="/" element={<Wellcome />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/starship" element={<StarshipPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </SwapiProvider>
    </div>
  );
};

export default App;
