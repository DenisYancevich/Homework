import { useState } from "react";
import styles from "../styles/checkButton.module.css";

function CheckButton({ onClick }) {
  const [mainClass, changeMainClass] = useState(styles.button);

  function onClickIns(e) {
    onClick(e);
    changeMainClass(`${styles.active} ${styles.button}`);
    setTimeout(() => changeMainClass(`${styles.button}`), 500);
  }

  return (
    <div className={styles.wrapper}>
      <button className={mainClass} onClick={onClickIns}>
        <span className="nonselect">Check results!</span>
      </button>
    </div>
  );
}

export default CheckButton;
