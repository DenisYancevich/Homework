class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Flat {
  humanArr = [];
  addHuman(Human) {
    this.humanArr.push(Human);
  }
}

class Building {
  flatArr = [];
  constructor(max) {
    this.max = max;
  }
  addFlat(Flat) {
    if (this.flatArr.length < this.max) {
      this.flatArr.push(Flat);
    } else {
      console.log(`Too many flats in this building, try another one!`);
    }
  }
}

const john = new Human("John", "M");
const lisa = new Human("Lisa", "W");
const mark = new Human("Mark", "M");
const ann = new Human("Ann", "W");

const flat1 = new Flat();
flat1.addHuman(john);
flat1.addHuman(lisa);

console.log(flat1);

const flat2 = new Flat();
flat2.addHuman(mark);
flat2.addHuman(ann);

console.log(flat2);

const flat3 = new Flat();

const building = new Building(2);
building.addFlat(flat1);
building.addFlat(flat2);

console.log(building);

building.addFlat(flat3);
