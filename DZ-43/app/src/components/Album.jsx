import { Link } from "react-router-dom";

import styles from "./styles/album.module.css";

function Album({ album }) {
  return (
    <div className={styles.main}>
      <div>
        <span>Title: {album.title}</span>
      </div>
      <Link to={`/users/albums/photos/${album.id}`}>Photos</Link>
    </div>
  );
}

export default Album;
