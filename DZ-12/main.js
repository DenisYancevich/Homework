function removeElement(arr, item) {
  if (!Array.isArray(arr)) {
    console.log("Given item isn`t an Array!");
  } else {
    const index = arr.indexOf(item);
    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      console.log("Given item not in Array!");
    }
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(array);
removeElement(array, 2);
console.log(array);
