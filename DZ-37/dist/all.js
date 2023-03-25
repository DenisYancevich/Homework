"use strict";
var goods = [
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
  ],
  fieldDictionary = {
    fullName: "Full name",
    city: "City",
    quantity: "Quantity",
    comment: "Comment",
  };
("use strict");
var fContainer = document.querySelector(".container div:nth-child(1)"),
  sContainer = document.querySelector(".container div:nth-child(2)"),
  tContainer = document.querySelector(".container div:nth-child(3)"),
  congratsModal = document.querySelector("#congratsModal"),
  formModal = document.querySelector("#formModal"),
  errorModal = document.querySelector("#errorModal"),
  ordersModal = document.querySelector("#ordersModal"),
  tempPurchaseData = {},
  ordersArr =
    (document.querySelectorAll(".modalContainer").forEach(function (t) {
      return t.classList.add("hidden");
    }),
    JSON.parse(sessionStorage.getItem("orders")) || []);
(fContainer.innerHTML = goods
  .map(function (t) {
    return '<h1 class="category" data-category-type="'
      .concat(t.category, '">')
      .concat(t.category, "</h1>");
  })
  .join("")),
  document.querySelectorAll(".category").forEach(function (o) {
    o.addEventListener("click", function () {
      (sContainer.innerHTML = goods
        .find(function (t) {
          return t.category == o.getAttribute("data-category-type");
        })
        .goodsList.map(function (t) {
          return '<h1 class="goodsFromList" data-goods-type="'
            .concat(t.name, '">')
            .concat(t.name, "</h1>");
        })
        .join("")),
        (tContainer.innerHTML = ""),
        document.querySelectorAll(".goodsFromList").forEach(function (e) {
          e.addEventListener("click", function () {
            (tContainer.innerHTML = "<div><h1>"
              .concat(e.getAttribute("data-goods-type"), "</h1><p>")
              .concat(
                goods
                  .find(function (t) {
                    return t.category == o.getAttribute("data-category-type");
                  })
                  .goodsList.find(function (t) {
                    return t.name == e.getAttribute("data-goods-type");
                  }).description,
                '</p></div>\n                    <button class="btn-primary" id="buyButton" data-category-type="'
              )
              .concat(
                o.getAttribute("data-category-type"),
                '" data-goods-type="'
              )
              .concat(e.getAttribute("data-goods-type"), '">Buy!!!</button>')),
              document
                .getElementById("buyButton")
                .addEventListener("click", function () {
                  formModal.classList.remove("hidden"),
                    (tempPurchaseData.goodName =
                      e.getAttribute("data-goods-type")),
                    (tempPurchaseData.goodType =
                      o.getAttribute("data-category-type"));
                });
          });
        });
    });
  }),
  document
    .querySelector("#shipmentInfoForm")
    .addEventListener("submit", function (t) {
      t.preventDefault();
      var t = new FormData(t.target),
        e = Object.fromEntries(t.entries());
      if (e.fullName && e.city && e.quantity && e.comment) {
        var o,
          r = "";
        for (o in e)
          r += "<tr><td>"
            .concat(fieldDictionary[o], "</td><td>")
            .concat(e[o], "</td></tr>");
        formModal.classList.add("hidden"),
          (congratsModal.querySelector(
            ".modalBody div:nth-child(2)"
          ).innerHTML = "You have succesfully bought "
            .concat(tempPurchaseData.goodName, " from ")
            .concat(tempPurchaseData.goodType, " category!")),
          (congratsModal.querySelector("#shipmentInfoTable").innerHTML =
            '<table><tr><th colspan="2">Shipment information</th></tr>'.concat(
              r,
              "</table>"
            )),
          congratsModal.classList.remove("hidden"),
          ordersArr.push({
            name: tempPurchaseData.goodName,
            fullName: e.fullName,
          }),
          sessionStorage.setItem("orders", JSON.stringify(ordersArr));
      } else formModal.classList.add("hidden"), errorModal.classList.remove("hidden");
    }),
  document.querySelectorAll(".closeModal").forEach(function (t) {
    return t.addEventListener("click", function () {
      this.parentElement.parentElement.classList.add("hidden"),
        "errorCheckButton" == this.id
          ? formModal.classList.remove("hidden")
          : "ordersCloseButton" != this.id &&
            ((sContainer.innerHTML = ""),
            (tContainer.innerHTML = ""),
            (tempPurchaseData.goodType = null),
            (tempPurchaseData.goodName = null),
            document.querySelector("#shipmentInfoForm").reset());
    });
  }),
  document.querySelectorAll(".ordersButton").forEach(function (t) {
    return t.addEventListener("click", function () {
      if (ordersArr.length) {
        var t,
          e = "";
        for (t in ordersArr)
          e += "<tr><td>"
            .concat(ordersArr[t].name, "</td><td>")
            .concat(ordersArr[t].fullName, "</td></tr>");
        document.querySelector("#ordersInfoTable").innerHTML =
          '<table><tr><th colspan="2">Orders information</th></tr>'.concat(
            e,
            "</table>"
          );
      } else document.querySelector("#ordersInfoTable").innerHTML = "You don`t have any orders yet!";
      ordersModal.classList.remove("hidden");
    });
  });
