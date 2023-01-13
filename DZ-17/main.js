function generateKey(number, characters) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const key = generateKey(16, characters);
console.log(key);
