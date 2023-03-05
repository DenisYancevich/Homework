class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_FRIES = { price: 15, calories: 10 };
  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_SAUCE = { price: 15, calories: 0 };
  components = [];
  constructor(size, stuff) {
    this.components.push(size);
    this.components.push(stuff);
  }
  calculate() {
    return this.components.map((el) => el.calories).reduce((a, b) => a + b, 0);
  }
  calculatePrice() {
    return this.components.map((el) => el.price).reduce((a, b) => a + b, 0);
  }
  addTopping(topping) {
    this.components.push(topping);
  }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
