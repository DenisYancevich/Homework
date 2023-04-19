import styles from "../styles/todo.module.css";
import { useState } from "react";

function ToDo({ toDoObj, onClickChangeState }) {
  const [stateClass, changeState] = useState(toDoObj.stateComplete);

  const onClickHandler = (event) => {
    onClickChangeState(event.target.getAttribute("data-id"), !stateClass);
    if (stateClass) {
      changeState(false);
    } else {
      changeState(true);
    }
  };

  return (
    <div
      className={stateClass ? `${styles.main} ${styles.checked}` : styles.main}
    >
      <div
        className={styles.tick}
        onClick={onClickHandler}
        data-id={toDoObj.id}
      >
        <svg
          width="18"
          height="16"
          viewBox="0 0 512 458"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 220.57C100.43 219.24 121 215.37 191.79 302.07C246.08 212.07 306.41 134.17 371.71 66.21C436 -0.719963 436.5 -0.88996 512 0.24004C383.54 143 278.71 295.74 194.87 457.57C150 361.45 87.33 280.53 0 220.57Z"
            fill="black"
          />
        </svg>
      </div>
      <div className={styles.text}>{toDoObj.text}</div>
    </div>
  );
}

export default ToDo;
