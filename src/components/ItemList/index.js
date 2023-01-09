import { Component } from "react";
import { ThreeCircles } from "react-loader-spinner";


import "./itemList.scss";

class ItemList extends Component {
  state = {
    persons: null,
    loading: false,
    error: false,
  };



  componentDidMount() {
    this.props.getData().then((persons) => this.setState({ persons }));
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
      const label = this.props.renderItem(item);
      return  <li className="list-group-item" key={item.id} onClick={() => this.props.onSelectChar(item.id)}>{label}</li>
    })
    return (
      <ul className="item__list list-group">
        {char}
      </ul>
    );
  }
}
export default ItemList;
