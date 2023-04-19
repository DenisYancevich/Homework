import { Link } from "react-router-dom";

import styles from "./styles/header.module.css";

function Header() {
  return (
    <div className={styles.main}>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Header;
