import axios from "axios";

export const getDataAPI = (userId) => {
  return axios
    .post("http://localhost:4444/getInfo", { userId: userId })
    .catch((data) => data);
};

export const updateStateAPI = (userId, id, state) => {
  return axios
    .post("http://localhost:4444/updateState", {
      userId: userId,
      id: id,
      state: state,
    })
    .catch((data) => data);
};

export const addToDoAPI = (userId, text) => {
  return axios
    .post("http://localhost:4444/addToDo", { userId: userId, text: text })
    .catch((data) => data);
};

export const addUserAPI = () => {
  return axios.get("http://localhost:4444/addUser").catch((data) => data);
};
