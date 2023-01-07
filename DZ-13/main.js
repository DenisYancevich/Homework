function getRandomItem(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(array);
console.log(getRandomItem(array));
