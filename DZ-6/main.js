let oper;
do {
  oper = prompt("Choose operation (add, sub, mult, div):");
  if (!["add", "sub", "mult", "div"].includes(oper)) {
    oper = "";
    alert("Wrong operation!");
  }
} while (oper == "");

const a = prompt("First number:");
const b = prompt("Second number:");

switch (oper) {
  case "add":
    alert(`${a} + ${b} = ${+a + +b}`);
    break;
  case "sub":
    alert(`${a} - ${b} = ${a - b}`);
    break;
  case "mult":
    alert(`${a} * ${b} = ${a * b}`);
    break;
  case "div":
    alert(`${a} / ${b} = ${a / b}`);
    break;
}
