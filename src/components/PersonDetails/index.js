import { Component } from "react";

import StarApi from "../../service";
import { ThreeCircles } from "react-loader-spinner";

import "./personDetails.scss";

class PersonDetails extends Component {
  state = {
    person: null,
    loading: false,
  };

  starAPi = new StarApi();

  componentDidMount() {
    this.onPersonUpdate();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.onPersonUpdate();
    }
  }
  onPersonUpdate = () => {
    this.onPersonLoading();
    if (!this.props.charId) {
      return;
    }
    this.starAPi.getPerson(this.props.charId).then((person) => {
      this.setState({ person, loading: false });
    });
  };
  onPersonLoading = () => {
    this.setState({
      loading: true,
    });
  };
  render() {
    const { person, loading } = this.state;
    if (!person) {
      return <div className="choose">Choose a character and you will see details</div>;
    }
    const spinner = loading ? (
     <div className="details__spinner">
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
     </div>
    ) : null;
    const content = !loading ? <View person={person} /> : null;

    return (
      <div className="details">
        {content}
        {spinner}
      </div>
    );
  }
}

const View = ({ person: { id, name, gender, birthYear, eyeColor } }) => {
  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt=""
        className="details__img"
      />
      <div className="details__content">
        <div className="details-title">{name}</div>
        <ul className="details__list list-group">
          <li className="list-group-item">Gender: {gender}</li>
          <li className="list-group-item">Birth year: {birthYear}</li>
          <li className="list-group-item">Eye color: {eyeColor}</li>
        </ul>
      </div>
    </>
  );
};
export default PersonDetails;
