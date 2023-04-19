import { useState } from "react";
import Card from "./Card.jsx";
import styles from "../styles/board.module.css";
import CheckButton from "./CheckButton.jsx";
import { getInfo } from "../functions/functions.js";
import { useEffect } from "react";
import getWebsocketReady from "../functions/websocket.js";

function Board({ onClickCastVote, onClickCheckResults }) {
  const [cardList, changeCardList] = useState([]);

  useEffect(() => {
    fetchData();
    getWebsocketReady(fetchData);
  }, []);

  async function fetchData() {
    const res = await getInfo();
    changeCardList(res);
  }

  return (
    <div className={styles.board}>
      <div className={styles.emojiField}>
        {cardList.map((el) => {
          return <Card key={el.id} emoji={el} onClick={onClickCastVote}></Card>;
        })}
      </div>
      <CheckButton onClick={onClickCheckResults}></CheckButton>
    </div>
  );
}

export default Board;
