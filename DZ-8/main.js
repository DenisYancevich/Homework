console.group(
  "Вивести на сторінку в один рядок через кому числа від 10 до 20."
);
let finalString = "";
for (let i = 10; i <= 20; i++) {
  finalString += i;
  if (i != 20) {
    finalString += ", ";
  }
}
console.log(finalString);
console.groupEnd();

console.group("Вивести квадрати чисел від 10 до 20.");
for (let i = 10; i <= 20; i++) {
  console.log(i * i);
}
console.groupEnd();

console.group("Вивести таблицю множення на 7.");
for (let i = 1; i <= 10; i++) {
  console.log(`${i} * 7 = ${i * 7}`);
}
console.groupEnd();

console.group("Знайти добуток усіх цілих чисел від 15 до 35.");
let multiResult = 1;
for (let i = 15; i <= 35; i++) {
  multiResult *= i;
}
console.log(multiResult);
console.groupEnd();

console.group("Знайти середнє арифметичне всіх цілих чисел від 1 до 500.");
let sumForAvgResult = 0;
let counter = 0;
for (let i = 1; i <= 500; i++) {
  sumForAvgResult += i;
  counter++;
}
console.log(sumForAvgResult / counter);
console.groupEnd();

console.group("Вивести суму лише парних чисел в діапазоні від 30 до 80.");
let sumOnlyPairResult = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 == 0) sumOnlyPairResult += i;
}
console.log(sumOnlyPairResult);
console.groupEnd();
