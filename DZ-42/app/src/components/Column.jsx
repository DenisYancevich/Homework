import styles from "../styles/column.module.css";
import ToDo from "./ToDo.jsx";

import { useSelector } from "react-redux";

function Column() {
  const toDoList = useSelector((state) => state.toDo.list);

  return (
    <div className={styles.column}>
      {toDoList.map((el) => {
        return <ToDo key={el.id} toDoObj={el}></ToDo>;
      })}
    </div>
  );
}

export default Column;
