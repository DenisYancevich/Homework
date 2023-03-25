const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let arr = form.numbers.value.split(",");
  if (form.sortRadio.value == "asc") {
    arr.sort((a, b) => {
      return a - b;
    });
  } else {
    arr.sort((a, b) => {
      return b - a;
    });
  }
  form.numbers.value = arr.join(",");
});
