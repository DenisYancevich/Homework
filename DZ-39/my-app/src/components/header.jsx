import { Component } from "react";
import logo from "./logo.png";

class Header extends Component {
  state = {
    buttonsList: [],
  };
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-links">
          {this.props.buttonsList.map((element) => {
            return (
              <a
                key={element.link + element.name}
                href={element.link}
                target="_blank"
                rel="noreferrer"
              >
                {element.name}
              </a>
            );
          })}
        </div>
        <div className="header-dummy"></div>
        <div className="header-end">
          <a
            href="https://github.com/facebook/react/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
