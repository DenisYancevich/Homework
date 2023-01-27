const img = document.getElementsByClassName("imgToChange")[0];
let currImg = 1;

document.querySelectorAll(".sideButton").forEach((element) => {
  element.addEventListener("click", function () {
    currImg += +element.value;
    img.src = `image${currImg}.jpg`;
    if (currImg == 1) {
      document.getElementById("prev").setAttribute("disabled", "true");
    } else if (currImg == 8) {
      document.getElementById("next").setAttribute("disabled", "true");
    } else {
      document.getElementById("prev").removeAttribute("disabled");
      document.getElementById("next").removeAttribute("disabled");
    }
  });
});
