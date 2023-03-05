const textArr = [1, 2, [1, 2, [1, 2, 4, 5]]];

function generateList(array) {
  let code = "";
  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      code += `<li>${generateList(elem)}</li>`;
    } else {
      code += `<li>${elem}</li>`;
    }
  });
  return `<ul>${code}</ul>`;
}

document.querySelector(".container").innerHTML = generateList(textArr);
