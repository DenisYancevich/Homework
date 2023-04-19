import { useState } from "react";
import styles from "../styles/card.module.css";

function Card({ emoji: { id, emoji, count }, onClick }) {
  const [mainClass, changeMainClass] = useState(styles.card);

  function onClickIns(e) {
    onClick(e);
    changeMainClass(`${styles.active} ${styles.card}`);
    setTimeout(() => changeMainClass(`${styles.card}`), 500);
  }

  return (
    <div data-emoji-id={id} className={mainClass} onClick={onClickIns}>
      <p className={`${styles.emoji} nonselect`}>{emoji}</p>
      <p className={`${styles.counter} nonselect`}>{count}</p>
    </div>
  );
}

export default Card;
