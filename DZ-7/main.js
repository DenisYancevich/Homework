const city = prompt("Input city name:");
let coordinates;
let isFound = false;
switch (city) {
  case "London":
    coordinates = `51.507351; -0.127758`;
    isFound = true;
    break;
  case "Kyiv":
    coordinates = `50.447731; -30.542721`;
    isFound = true;
    break;
  case "New York":
    coordinates = `40.712776; -74.005974`;
    isFound = true;
    break;
  case "Oslo":
    coordinates = `59.913868; -10.752245`;
    isFound = true;
    break;
  case "Canbera":
    coordinates = `-35.280937; 149.130005`;
    isFound = true;
    break;
  default:
    isFound = false;
}
alert(
  isFound
    ? `Coordinates for ${city}: ${coordinates}`
    : `Coordinates for ${city} not found!`
);
