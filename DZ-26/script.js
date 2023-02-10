// Example of content, normally taken from DB
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

// Dictionary of submit form fields
const fieldDictionary = {
  fullName: "Full name",
  city: "City",
  quantity: "Quantity",
  comment: "Comment",
};

// Getting all needed nodes that used repeatedly
const fContainer = document.querySelector(".container div:nth-child(1)");
const sContainer = document.querySelector(".container div:nth-child(2)");
const tContainer = document.querySelector(".container div:nth-child(3)");
const congratsModal = document.querySelector("#congratsModal");
const formModal = document.querySelector("#formModal");
const errorModal = document.querySelector("#errorModal");
const ordersModal = document.querySelector("#ordersModal");
const tempPurchaseData = {};

// Pre-hidding all modals, can be done by HTML instead
document
  .querySelectorAll(".modalContainer")
  .forEach((elem) => elem.classList.add("hidden"));

// Getting current user orders list from sessionStorage or empty array if list is absent
const ordersArr = JSON.parse(sessionStorage.getItem("orders")) || [];

// Forming category list in first block
fContainer.innerHTML = goods
  .map(function (elem) {
    return `<h1 class="category" data-category-type="${elem.category}">${elem.category}</h1>`;
  })
  .join("");

// Setting category and goods lists behaviors
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
            formModal.classList.remove("hidden");
            tempPurchaseData.goodName = elemIns.getAttribute("data-goods-type");
            tempPurchaseData.goodType = elem.getAttribute("data-category-type");
          });
      });
    });
  });
});

// Click for "Submit" button in buy-form
document
  .querySelector("#shipmentInfoForm")
  .addEventListener("submit", function (event) {
    // Preventing default action and getting form data
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    // Check if input is valid
    const valid = false;
    if (
      formDataObj.fullName &&
      formDataObj.city &&
      formDataObj.quantity &&
      formDataObj.comment
    ) {
      // Itterating form data to form table with order info
      let tablePart = "";
      for (i in formDataObj) {
        tablePart += `<tr><td>${fieldDictionary[i]}</td><td>${formDataObj[i]}</td></tr>`;
      }

      formModal.classList.add("hidden");
      congratsModal.querySelector(
        ".modalBody div:nth-child(2)"
      ).innerHTML = `You have succesfully bought ${tempPurchaseData.goodName} from ${tempPurchaseData.goodType} category!`;
      congratsModal.querySelector(
        "#shipmentInfoTable"
      ).innerHTML = `<table><tr><th colspan="2">Shipment information</th></tr>${tablePart}</table>`;
      congratsModal.classList.remove("hidden");
      ordersArr.push({
        name: tempPurchaseData.goodName,
        fullName: formDataObj.fullName,
      });
      sessionStorage.setItem("orders", JSON.stringify(ordersArr));
    } else {
      formModal.classList.add("hidden");
      errorModal.classList.remove("hidden");
    }
  });

// Click for "Close" buttons
document.querySelectorAll(".closeModal").forEach((elem) =>
  elem.addEventListener("click", function () {
    this.parentElement.parentElement.classList.add("hidden");
    if (this.id == "errorCheckButton") {
      formModal.classList.remove("hidden");
    } else if (this.id == "ordersCloseButton") {
    } else {
      sContainer.innerHTML = "";
      tContainer.innerHTML = "";
      tempPurchaseData.goodType = null;
      tempPurchaseData.goodName = null;
      document.querySelector("#shipmentInfoForm").reset();
    }
  })
);

// Click for "My orders" button
document.querySelectorAll(".ordersButton").forEach((elem) =>
  elem.addEventListener("click", function () {
    // Check if user have orders
    if (ordersArr.length) {
      let tablePart = "";
      for (i in ordersArr) {
        tablePart += `<tr><td>${ordersArr[i].name}</td><td>${ordersArr[i].fullName}</td></tr>`;
      }
      document.querySelector(
        "#ordersInfoTable"
      ).innerHTML = `<table><tr><th colspan="2">Orders information</th></tr>${tablePart}</table>`;
    } else {
      document.querySelector(
        "#ordersInfoTable"
      ).innerHTML = `You don\`t have any orders yet!`;
    }
    ordersModal.classList.remove("hidden");
  })
);
