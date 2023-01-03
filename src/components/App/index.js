import { Component } from "react";
import ErrorBoundary from "../ErrorBoundary";

import Header from "../Header";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import RandomPlanet from "../RandomPlanet";
import "./app.scss";

class App extends Component {
  state = {
    charId: null,
  };

  onSelectChar = (id) => {
    this.setState({
      charId: id,
    });
  };
  render() {
    const { charId } = this.state;
    return (
      <div className="wrapper">
        <Header />
        <ErrorBoundary>
          <RandomPlanet />
        </ErrorBoundary>

        <div className="middle d-flex justify-content-between ">
          <ErrorBoundary>
            <ItemList onSelectChar={this.onSelectChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <PersonDetails charId={charId} />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
