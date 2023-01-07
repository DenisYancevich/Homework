function getLongestWord(string) {
  let longest = "";
  if (Object.getPrototypeOf(string) == Object.getPrototypeOf(new String())) {
    const stringArr = string.split(" ");
    for (let i = 0; i < stringArr.length; i++) {
      if (stringArr[i].length > longest.length) longest = stringArr[i];
    }
  } else {
    console.log("Not a string given!");
  }
  return longest;
}

const myString =
  "london is the capital of great britain its political economic and cultural centre";

console.log(getLongestWord(myString));
