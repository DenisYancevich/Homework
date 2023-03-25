import "./App.css";
import AppHeader from "./components/header";
import AppNav from "./components/nav";
import AppMainContainer from "./components/mainContainer";
import { Component } from "react";

const headerButtons = [
  { name: "React", link: "https://ru.reactjs.org/" },
  { name: "Docs", link: "https://ru.reactjs.org/docs/getting-started.html" },
  {
    name: "Blog",
    link: "https://ru.reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html",
  },
  { name: "Community", link: "https://ru.reactjs.org/community/support.html" },
];

const topics = [
  { id: 1, name: "Home", text: "It`s your home!" },
  { id: 2, name: "Posts", text: "It`s your posts!" },
  { id: 3, name: "Favorite", text: "It`s your favorites!" },
];

class App extends Component {
  state = {
    content: "",
  };
  changeContent = (event) => {
    const id = event.target.getAttribute("data-value");
    this.setState({ content: topics.find((el) => el.id == id).text });
  };
  render() {
    return (
      <div className="App">
        <AppHeader buttonsList={headerButtons}></AppHeader>
        <div className="siteContainer">
          <AppNav
            navList={topics.map((e) => {
              return { name: e.name, id: e.id };
            })}
            clickHandler={this.changeContent}
          ></AppNav>
          <AppMainContainer content={this.state.content}></AppMainContainer>
        </div>
      </div>
    );
  }
}

export default App;
