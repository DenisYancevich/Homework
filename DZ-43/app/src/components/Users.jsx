import { useEffect, useState } from "react";

import styles from "./styles/users.module.css";

import User from "./User";

import { fetchUsers } from "../functions/functions";

function Users() {
  const [list, setList] = useState([]);

  const getUsers = async () => {
    const { data } = await fetchUsers();
    setList(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const dataList = list.map((user) => <User key={user.id} user={user}></User>);

  return <div className={styles.main}>{dataList}</div>;
}

export default Users;
