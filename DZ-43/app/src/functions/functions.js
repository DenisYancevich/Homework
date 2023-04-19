import axios from "axios";

export const fetchUsers = () =>
  axios.get("https://jsonplaceholder.typicode.com/users");

export const fetchAlbums = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);

export const fetchPhotos = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
