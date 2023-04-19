import "./App.css";
import Board from "./components/Board";
import { castVote, getBestEmoji } from "../src/functions/functions.js";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, changeShowModal] = useState(false);
  const [emoji, changeWinningEmoji] = useState({});

  const closeModalOnClick = (event) => {
    changeShowModal(false);
  };

  const checkResultsOnClick = async () => {
    const data = await getBestEmoji();
    changeWinningEmoji(data);
    changeShowModal(true);
  };

  return (
    <div className="App">
      {showModal ? (
        <Modal emoji={emoji} closeOnClick={closeModalOnClick}></Modal>
      ) : null}
      <Board
        onClickCheckResults={checkResultsOnClick}
        onClickCastVote={castVote}
      ></Board>
    </div>
  );
}

export default App;
