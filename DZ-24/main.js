const goods = [
  {
    category: "Food",
    goodsList: [
      { name: "Pasta", description: "Good for food!" },
      { name: "Cheese", description: "Good for pizza!" },
      { name: "Milk", description: "Good for health!" },
    ],
  },
  {
    category: "Cars",
    goodsList: [
      { name: "BMW", description: "Good car, if you have service near!" },
      {
        name: "Honda",
        description: "Good car if you want to die in car crash!",
      },
      { name: "Sens", description: "Not a good car!" },
    ],
  },
  {
    category: "Pets",
    goodsList: [
      { name: "Dog", description: "Want to hug you!" },
      { name: "Cat", description: "Want to kill you!" },
      { name: "Snake", description: "Not a good pet!" },
    ],
  },
];

const fContainer = document.querySelector(".container div:nth-child(1)");
const sContainer = document.querySelector(".container div:nth-child(2)");
const tContainer = document.querySelector(".container div:nth-child(3)");
const modalContainer = document.querySelector(".modalContainer");
const modalBody = document.querySelector(".modalBody div div");

modalContainer.classList.add("hidden");

fContainer.innerHTML = goods
  .map(function (elem) {
    return `<h1 class="category" data-category-type="${elem.category}">${elem.category}</h1>`;
  })
  .join("");

document.querySelectorAll(".category").forEach(function (elem) {
  elem.addEventListener("click", function () {
    sContainer.innerHTML = goods
      .find(function (elemF) {
        return elemF.category == elem.getAttribute("data-category-type");
      })
      .goodsList.map(function (elemM) {
        return `<h1 class="goodsFromList" data-goods-type="${elemM.name}">${elemM.name}</h1>`;
      })
      .join("");
    tContainer.innerHTML = "";

    document.querySelectorAll(".goodsFromList").forEach(function (elemIns) {
      elemIns.addEventListener("click", function () {
        tContainer.innerHTML = `<div><h1>${elemIns.getAttribute(
          "data-goods-type"
        )}</h1><p>${
          goods
            .find(function (elemF) {
              return elemF.category == elem.getAttribute("data-category-type");
            })
            .goodsList.find(function (elemF) {
              return elemF.name == elemIns.getAttribute("data-goods-type");
            }).description
        }</p></div>
                  <button class="btn-primary" id="buyButton" data-category-type="${elem.getAttribute(
                    "data-category-type"
                  )}" data-goods-type="${elemIns.getAttribute(
          "data-goods-type"
        )}">Buy!!!</button>`;
        document
          .getElementById("buyButton")
          .addEventListener("click", function () {
            modalContainer.classList.remove("hidden");
            modalBody.innerHTML = `You have succesfully bought ${elemIns.getAttribute(
              "data-goods-type"
            )} from ${elem.getAttribute("data-category-type")} category!`;
          });
      });
    });
  });
});

document.querySelector(".closeModal").addEventListener("click", function () {
  modalContainer.classList.add("hidden");
  sContainer.innerHTML = "";
  tContainer.innerHTML = "";
});
