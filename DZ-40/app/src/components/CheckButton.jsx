import { useState } from "react";
import styles from "../styles/checkButton.module.css";

import styles from "../styles/modal.module.css";
import Card from "./Card.jsx";

function Modal({ emoji, closeOnClick }) {
  const closeModalOnClick = (event) => {
    if (event.target.getAttribute("data-canclose")) {
      closeOnClick();
    }
  };

  return (
    <div
      data-canclose="true"
      className={styles.background}
      onClick={closeModalOnClick}
    >
      <div className={styles.body}>
        <h1 className="nonselect">The most popular emoji(-s) is:</h1>
        <div className={`${styles.cardHolder} nonselect`}>
          {emoji.map((el) => {
            return <Card key={el.id} emoji={el}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Modal;
