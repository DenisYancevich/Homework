console.log(
  "Дано масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]"
);
const givenArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
console.group("1. Знайти суму та кількість позитивних елементів.");
let positiveSum = 0;
let positiveCount = 0;
for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] > 0) {
    positiveSum += givenArray[i];
    positiveCount++;
  }
}
console.log(
  `Сума позитивних елементів - ${positiveSum}, всього позитивних елементів - ${positiveCount}.`
);
console.groupEnd();

console.group("2. Знайти мінімальний елемент масиву та його порядковий номер.");
let minElem = givenArray[0];
let minElemNum = 0;
for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] < minElem) {
    minElem = givenArray[i];
    minElemNum = i;
  }
}
console.log(
  `3. Мінімальний елемент масиву - ${minElem}, його порядковий номер - ${minElemNum}.`
);
console.groupEnd();

console.group("Знайти максимальний елемент масиву та його порядковий номер.");
let maxElem = givenArray[0];
let maxElemNum = 0;
for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] > maxElem) {
    maxElem = givenArray[i];
    maxElemNum = i;
  }
}
console.log(
  `4. Масимальний елемент масиву - ${maxElem}, його порядковий номер - ${maxElemNum}.`
);
console.groupEnd();

console.group("Визначити кількість негативних елементів.");
let negativeElemCount = 0;
for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] < 0) {
    negativeElemCount++;
  }
}
console.log(`Кількість негативних елементів - ${negativeElemCount}.`);
console.groupEnd();

console.group("5. Знайти добуток позитивних елементів.");
let positiveElemMulti = 1;
for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] > 0) {
    positiveElemMulti *= givenArray[i];
  }
}
console.log(`Добуток позитивних елементів - ${positiveElemMulti}.`);
console.groupEnd();
