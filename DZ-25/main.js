const textarea = document.querySelector(".container textarea");
const ghost = document.querySelector(".container .ghost");

textarea.addEventListener("focus", function () {
  ghost.classList.remove("hidden");
});
textarea.addEventListener("focusout", function () {
  ghost.classList.add("hidden");
});
