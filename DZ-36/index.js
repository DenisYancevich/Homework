import { fetchGetUserByName, fetchGetUserInfractions } from "./async-calls.js";

export async function getRelevantInfractionReasons(username) {
  // Get API info
  try {
    const user = await fetchGetUserByName(username);
    const inf = await fetchGetUserInfractions(user.id);

    if (inf && inf.length > 0) {
      // find most recent and worst infraction
      let foundIndexRecent = 0;
      let foundIndexWorst = 0;
      for (let i = 1; i < inf.length; i++) {
        if (inf[i].id > inf[foundIndexRecent].id) {
          foundIndexRecent = i;
        }
        if (inf[i].points > inf[foundIndexWorst].points) {
          foundIndexWorst = i;
        }
      }
      const finObj = {
        mostRecent: replaceURLs(inf[foundIndexRecent].reason),
        worst: replaceURLs(inf[foundIndexWorst].reason),
      };
      return finObj;
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
    return {};
  }
}

// Universal function
function replaceURLs(data) {
  return data.replace(
    /\b(http)(s)?:\/\/\S+/,
    (match) => `<a href="${match}">${match}</a>`
  );
}
