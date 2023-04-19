import { getDataAPI, castVoteAPI, getBestEmojiAPI } from "./apiCalls.js";

export const getInfo = async () => {
  const res = await getDataAPI();
  return res.data;
};

export const castVote = async (event) => {
  const emojiID = event.target.getAttribute("data-emoji-id");
  const res = await castVoteAPI(emojiID);
};

export const getBestEmoji = async () => {
  const res = await getBestEmojiAPI();
  return res.data;
};
