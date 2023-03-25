import { getUserByName, getUserInfractions } from "./user-api.js";
export const fetchGetUserByName = (username) =>
  new Promise((resolveIns, rejectIns) => {
    getUserByName(username, resolveIns, rejectIns);
  });
export const fetchGetUserInfractions = (userId) =>
  new Promise((resolveIns, rejectIns) => {
    getUserInfractions(userId, resolveIns, rejectIns);
  });
