import { Component } from "react";

import StarApi from "../../service";

import ErrorBoundary from "../../components/ErrorBoundary";
import ItemList from "../../components/ItemList";
import { SwapiConsumer } from "../../components/swapiContext";
import ItemDetails from "../../components/ItemDetails";
import { Record } from "../../components/ItemDetails";

class StarshipPage extends Component {
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
    const { getAllStarships } = this.starApi;
    return (
      <div className="middle d-flex justify-content-between ">
        <ErrorBoundary>
          <ItemList
            onSelectChar={this.onSelectChar}
            getData={getAllStarships}
            renderItem={(item) => `${item.name}`}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <SwapiConsumer>
            {({ getStarship, getImgStarship }) => {
              return (
                <ItemDetails
                  charId={charId}
                  getData={getStarship(charId)}
                  getItemImg={getImgStarship(charId)}
                >
                  <Record label="Population" field="population" />
                  <Record label="Population" field="population" />
                  <Record label="Population" field="population" />
                </ItemDetails>
              );
            }}
          </SwapiConsumer>
        </ErrorBoundary>
      </div>
    );
  }
}
export default StarshipPage;
