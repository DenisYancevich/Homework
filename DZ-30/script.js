const mainCont = document.querySelector(".container");
const modal = document.querySelector(".modalContainer");
const mainURL = "https://pokeapi.co/api/v2/pokemon";

fetch(mainURL, {
  method: "GET",
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw "No pokemons today :(";
    }
  })
  .then((response) => {
    mainCont.innerHTML = response.results
      .map(
        (elem) =>
          `<div class="tile" pokemonData="${elem.name}"><h1>${elem.name}</h1></div>`
      )
      .join("");
  })
  .catch((error) => console.log(error));

mainCont.addEventListener("click", (event) => {
  if (Array.from(event.target.classList).includes("tile")) {
    event.stopPropagation();
    fetch(`${mainURL}/${event.target.getAttribute("pokemonData")}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw "No pokemon info today :(";
        }
      })
      .then((response) => {
        document.getElementById(
          "pokemonInfoTable"
        ).innerHTML = `<div><img width="200px" src="${response.sprites.front_default}"><h1>${response.name}</h1><p>Weight: ${response.weight}</p><p>Height: ${response.height}</p></div>`;
        modal.classList.remove("hidden");
      })
      .catch((error) => console.log(error));
  }
});

document.querySelector("button").addEventListener("click", (event) => {
  modal.classList.add("hidden");
});
