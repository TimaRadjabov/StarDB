import { Component } from "react";
import { ThreeCircles } from "react-loader-spinner";

import StarApi from "../../service";
import Error from "../Error";

import "./randomPlanet.scss";

class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.upDate();
    this.interval = setInterval(this.upDate, 5000);
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };
  onPlanetLoading = () => {
    this.setState({
      loading: true,
    });
  };
  onPlanetError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };
  upDate = () => {
    this.onPlanetLoading();
    const starAPI = new StarApi();
    const id = Math.floor(Math.random() * 15 + 1);
    starAPI.getPlanet(id).then(this.onPlanetLoaded).catch(this.onPlanetError);
  };
  render() {
    const { planet, loading, error } = this.state;
    const content = !(loading || error) ? <View planet={planet} /> : null;
    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? (
      <ThreeCircles
        height="100"
        width="100"
        color="#00bc8c"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    ) : null;
    return (
      <div className="planet__wrapper d-flex align-items-center justify-content-center">
        {content}
        {spinner}
        {errorMessage}
      </div>
    );
  }
}
const View = ({ planet }) => {
  const { id, name, population, rotation, diameter } = planet;
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="img__wrapper">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="img"
            className="planer__img"
          />
        </div>
        <div className="planet__about">
          <div className="planet__title">{name}</div>
          <ul className="planet__statistic list-group">
            <li className="planet__population list-group-item">
              Population <span>{population}</span>
            </li>
            <li className="planet__rotation list-group-item">
              Rotation Period <span>{rotation}</span>
            </li>
            <li className="planet__diameter list-group-item">
              Diameter <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default RandomPlanet;
