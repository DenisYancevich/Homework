function getArrayDifference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr1)) {
    console.log("One of the given items(or both) isn`t an Array!");
    return [];
  } else {
    const finalArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        finalArr.push(arr1[i]);
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (!arr1.includes(arr2[i])) {
        finalArr.push(arr2[i]);
      }
    }
    return finalArr;
  }
}

const arr1 = ["Lviv", "Dnipro", "Ternopil", "London"];
const arr2 = ["Dnipro", "Paris", "York", "Ternopil"];

console.log(getArrayDifference(arr1, arr2));
