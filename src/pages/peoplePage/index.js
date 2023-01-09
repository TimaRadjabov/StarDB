import { Component } from "react";

import StarApi from "../../service";

import ErrorBoundary from "../../components/ErrorBoundary";
import ItemList from "../../components/ItemList";
import { SwapiConsumer } from "../../components/swapiContext";
import ItemDetails, { Record } from "../../components/ItemDetails";

class PeoplePage extends Component {
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
    const { getAllPeople } = this.starApi;
    return (
      <div className="middle d-flex justify-content-between ">
        <ErrorBoundary>
          <ItemList
            onSelectChar={this.onSelectChar}
            getData={getAllPeople}
            renderItem={(item) => `${item.name}`}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <SwapiConsumer>
            {({ getPerson, getImgPerson }) => {
              return (
                <ItemDetails
                  charId={charId}
                  getData={getPerson(charId)}
                  getItemImg={getImgPerson(charId)}
                >
                  <Record label="Gender" field="gender" />
                  <Record label="Birth year" field="birthYear" />
                  <Record label="Eye color" field="eyeColor" />
                </ItemDetails>
              );
            }}
          </SwapiConsumer>
        </ErrorBoundary>
      </div>
    );
  }
}
export default PeoplePage;
