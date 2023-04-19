import { getDataAPI, updateStateAPI, addToDoAPI, addUserAPI } from "./apiCalls";

export const getInfo = async (userId) => {
  const res = await getDataAPI(userId);
  if (res.status === 200) {
    return res.data;
  } else {
    return null;
  }
};

export const updateState = async (userId, id, state) => {
  const res = await updateStateAPI(userId, id, state);
  return res.data;
};

export const addToDo = async (userId, text) => {
  const res = await addToDoAPI(userId, text);
  return res.data;
};

export const addUser = async () => {
  const res = await addUserAPI();
  return res.data;
};
