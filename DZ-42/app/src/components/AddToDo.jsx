import { useRef } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/addtodo.module.css";

function AddToDo({}) {
  const input = useRef();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch({ type: "ADD_TODO", payload: { text: input.current.value } });
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
