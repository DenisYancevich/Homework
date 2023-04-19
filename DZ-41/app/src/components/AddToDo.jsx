import { useRef } from "react";
import styles from "../styles/addtodo.module.css";

function AddToDo({ onClickAddToDo }) {
  const input = useRef();

  const onClickHandler = () => {
    onClickAddToDo(input.current.value);
    input.current.value = "";
  };

  return (
    <div className={styles.main}>
      <input ref={input} type="text"></input>
      <button onClick={onClickHandler}>Add ToDo!</button>
    </div>
  );
}

export default AddToDo;
