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
