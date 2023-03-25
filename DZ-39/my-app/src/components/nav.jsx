import { Component } from "react";

class Nav extends Component {
  state = {
    navList: [],
    clickHandler: () => {},
  };
  render() {
    return (
      <div className="nav">
        {this.props.navList.map((element) => {
          return (
            <a
              key={element.id}
              data-value={element.id}
              onClick={this.props.clickHandler}
            >
              {element.name}
            </a>
          );
        })}
      </div>
    );
  }
}

export default Nav;
