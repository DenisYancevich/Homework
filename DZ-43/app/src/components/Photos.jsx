import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./styles/albums.module.css";

import { fetchPhotos } from "../functions/functions";

function Photos() {
  const { id } = useParams();
  const [list, setList] = useState([]);

  const getUsers = async () => {
    const { data } = await fetchPhotos(id);
    setList(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const dataList = list.map((photo) => (
    <img key={photo.id} src={photo.thumbnailUrl} />
  ));

  return <div className={styles.main}>{dataList}</div>;
}

export default Photos;
