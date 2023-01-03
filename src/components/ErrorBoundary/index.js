import { Component } from "react";

import Error from "../Error";

class ErrorBoundary extends Component {
  state = {
    errorBlock: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      errorBlock: true,
    });
    
  }

  render() {
    if (this.state.errorBlock) {
      return <Error />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
