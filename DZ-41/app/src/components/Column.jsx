import styles from "../styles/column.module.css";
import ToDo from "./ToDo.jsx";

function Column({ toDoList, changeStateOnClick }) {
  return (
    <div className={styles.column}>
      {toDoList.map((el) => {
        return (
          <ToDo
            key={el.id}
            toDoObj={el}
            onClickChangeState={changeStateOnClick}
          ></ToDo>
        );
      })}
    </div>
  );
}

export default Column;
