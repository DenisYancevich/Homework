import { Link } from "react-router-dom";

import styles from "./styles/user.module.css";

function User({ user }) {
  return (
    <div className={styles.main}>
      <div className={styles.userInfo}>
        <span>Name: {user.name}</span>
        <span>Username: {user.username}</span>
        <span>Email: {user.email}</span>
      </div>
      <Link to={`/users/albums/${user.id}`}>Albums</Link>
    </div>
  );
}

export default User;
