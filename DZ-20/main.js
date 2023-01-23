const container = document.getElementById("container");
container.append(gettable(10, 10));

function gettable(height, width) {
  let counter = 0;

  const table = document.createElement("table");
  table.style.border = "1px solid black";

  let tableInner = "";
  for (let i = 0; i < height; i++) {
    tableInner += `<tr>`;
    for (let j = 0; j < width; j++) {
      tableInner += `<td>${++counter}</td>`;
    }
    tableInner += `</tr>`;
  }
  table.innerHTML = tableInner;

  return table;
}
