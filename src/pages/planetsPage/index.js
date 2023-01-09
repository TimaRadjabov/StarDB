import { Component } from "react";

import StarApi from "../../service";

import ErrorBoundary from "../../components/ErrorBoundary";
import ItemList from "../../components/ItemList";
import { SwapiConsumer } from "../../components/swapiContext";
import ItemDetails from "../../components/ItemDetails";
import { Record } from "../../components/ItemDetails";

class PlanetsPage extends Component {
    state = {
        charId: null,
      };
    
      starApi = new StarApi();
      onSelectChar = (id) => {
        this.setState({
          charId: id,
        });
      };
  render() {
    const { charId } = this.state;
    const { getAllPlanets } = this.starApi;
    return (
      <div className="middle d-flex justify-content-between ">
        <ErrorBoundary>
          <ItemList
            onSelectChar={this.onSelectChar}
            getData={getAllPlanets}
            renderItem={(item) => `${item.name}`}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <SwapiConsumer>
            {({ getPlanet, getImgPlanet }) => {
              return (
                <ItemDetails
                  charId={charId}
                  getData={getPlanet(charId)}
                  getItemImg={getImgPlanet(charId)}
                >
                  <Record label="Population" field="population" />
                  <Record label="Rotation" field="rotation" />
                  <Record label="Diameter" field="diameter" />
                </ItemDetails>
              );
            }}
          </SwapiConsumer>
        </ErrorBoundary>
      </div>
    );
  }
}
export default PlanetsPage;
