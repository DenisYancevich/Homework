import "./App.css";
import Column from "./components/Column";
import AddToDo from "./components/AddToDo";
import { useState, useEffect } from "react";
import {
  getInfo,
  updateState,
  addToDo,
  addUser,
} from "./functions/functions.js";
import Cookies from "universal-cookie";

const cookie = new Cookies();

function App() {
  const [list, changeList] = useState([]);

  useEffect(() => {
    if (cookie.get("user")) {
      fetchData(cookie.get("user"));
    } else {
      newUser();
    }
  }, []);

  const newUser = async () => {
    const user = await addUser();
    cookie.set("user", user);
    changeList([]);
  };

  const fetchData = async () => {
    const data = await getInfo(cookie.get("user"));
    if (data) {
      changeList(data);
    } else {
      newUser();
    }
  };

  const changeStateOnClick = async (id, state) => {
    const data = await updateState(cookie.get("user"), id, state);
    changeList(data);
  };

  const onClickAddToDo = async (text) => {
    const data = await addToDo(cookie.get("user"), text);
    changeList(data);
  };

  return (
    <div className="App">
      <Column toDoList={list} changeStateOnClick={changeStateOnClick}></Column>
      <AddToDo onClickAddToDo={onClickAddToDo}></AddToDo>
    </div>
  );
}

export default App;
