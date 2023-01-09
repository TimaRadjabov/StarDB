import React, { Component } from "react";

import { ThreeCircles } from "react-loader-spinner";

import "./itemDetails.scss";

class ItemDetails extends Component {
  state = {
    person: null,
    loading: false,
   
  };


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
    this.props.getData.then((person) => {
      this.setState({ person, loading: false });
    });
  };
  onPersonLoading = () => {
    this.setState({
      loading: true,
    });
  };
  render() {
    const { person, loading} = this.state;
    if (!person) {
      return <div className="choose">Choose a character and you will see details</div>;
    }
    const itemImg = this.props.getItemImg;
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
    const content = !loading ?  <View person={person} img={itemImg} children={this.props.children}/>  : null;

    return (
      <div className="details">
        {content}
        {spinner}
      </div>
    );
  }
}
export const Record = ({label, field, person}) => {
  return(
    <li className="list-group-item">{label}: {person[field]}</li>
  )
}
const View = ({ person, img, children }) => {
  return (
    <>
      <img
        src={img}
        alt="img"
        className="details__img"  
      />
      <div className="details__content">
        <div className="details-title">{person.name}</div>
        <ul className="details__list list-group">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {person})
        })}
         
        </ul>
      </div>
      
    </>
  );
};
export default ItemDetails;
