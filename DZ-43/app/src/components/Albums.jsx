import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./styles/albums.module.css";

import Album from "./Album";

import { fetchAlbums } from "../functions/functions";

function Albums() {
  const { id } = useParams();
  const [list, setList] = useState([]);

  const getUsers = async () => {
    const { data } = await fetchAlbums(id);
    setList(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const dataList = list.map((album) => (
    <Album key={album.id} album={album}></Album>
  ));

  return <div className={styles.main}>{dataList}</div>;
}

export default Albums;
