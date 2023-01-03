import { Component } from "react";
import { ThreeCircles } from "react-loader-spinner";
import StarApi from "../../service";

import "./itemList.scss";

class ItemList extends Component {
  state = {
    persons: null,
    loading: false,
    error: false,
  };

  starApi = new StarApi();

  componentDidMount() {
    this.starApi.getAllPeople().then((persons) => this.setState({ persons }));
  }

  render() {
    if (this.state.persons === null) {
      return <ThreeCircles
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
    }
    const {persons, loading, error} = this.state;
    const char = persons.map((item) => {
      return  <li className="list-group-item" key={item.id} onClick={() => this.props.onSelectChar(item.id)}>{item.name}</li>
    })
    return (
      <ul className="item__list list-group">
        {char}
      </ul>
    );
  }
}
export default ItemList;
