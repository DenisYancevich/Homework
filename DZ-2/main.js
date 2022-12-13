const hours = prompt("What time is it? (hours)");

const seconds = hours * 60 * 60;

alert(`There is ${numberWithSpaces(seconds)} second/s in ${hours} hour/s`);

function numberWithSpaces(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
