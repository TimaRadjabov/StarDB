import Header from "../Header";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import RandomPlanet from "../RandomPlanet";
import "./app.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <RandomPlanet />
      <div className="middle d-flex justify-content-between">
        <ItemList />
        <PersonDetails />
      </div>
    </div>
  );
};

export default App;
