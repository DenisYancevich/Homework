function proccessArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty("name")) {
      arr[i].name = arr[i].name.toUpperCase();
    }
    if (arr[i].hasOwnProperty("cities")) {
      arr[i].cities = arr[i].cities.split(",");
    }
    if (arr[i].hasOwnProperty("money")) {
      if (Number.parseFloat(arr[i].money)) {
        arr[i].money = Math.round(Number.parseFloat(arr[i].money));
      } else {
        console.log(
          `In element index ${i}, has wrong money value: ${arr[i].money}!`
        );
      }
    }
    if (arr[i].hasOwnProperty("children")) {
      arr[i].children.push({
        name: "Stepan",
        age: 1 + Math.floor(Math.random() * 17),
      });
    }
  }
}

const peoples = [
  {
    name: "Alina",
    money: 2700.32,
    cities: "Lviv, Kyiv, Ternopil",
    children: [
      {
        name: "Oliver",
        age: 6,
      },
    ],
  },
  {
    name: "Andrii",
    money: 9301.32,
    cities: "Paris, Madrid, Rivne",
    children: [],
  },
  {
    name: "George",
    money: "sadfsd",
    city: "Stambul",
    children: [
      {
        name: "Olha",
        age: 8,
      },
      {
        name: "Olena",
        age: 2,
      },
    ],
  },
];

console.log(peoples);

proccessArray(peoples);

for (let i = 0; i < peoples.length; i++) {
  console.log(peoples[i]);
}
