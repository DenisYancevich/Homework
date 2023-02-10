function sumEngine() {
  let sum = 0;
  return function (num) {
    sum += num;
    return sum;
  };
}

const sum = sumEngine();

console.log(sum(3)); // = 3
console.log(sum(5)); // = 8
console.log(sum(20)); // = 28
