import axios from "axios";

export const getDataAPI = () => {
  return axios.get("http://localhost:4444/getInfo").catch((data) => data);
};

export const castVoteAPI = (id) => {
  return axios
    .post("http://localhost:4444/addCount", { id: id })
    .catch((data) => data);
};

export const getBestEmojiAPI = () => {
  return axios.get("http://localhost:4444/getBestEmoji").catch((data) => data);
};
