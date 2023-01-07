function reverseNumber(number) {
  let reversed = 0;
  if (Object.getPrototypeOf(number) == Object.getPrototypeOf(new Number())) {
    reversed = (number + "").split("").reverse().join("");
  } else {
    console.log("Not a number given!");
  }
  return +reversed;
}

const number = 12345;

console.log(reverseNumber(number));
