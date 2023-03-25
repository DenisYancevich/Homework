import { Component } from "react";

class MainContainer extends Component {
  state = {
    content: [],
  };
  render() {
    return <div className="mainContainer">{this.props.content}</div>;
  }
}

export default MainContainer;
