import axios from "axios";

async function postWeather(city) {
  return axios
    .post(
      `http://api.openweathermap.org/data/2.5/weather?q=${city.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`
    )
    .catch((data) => data);
}

export default postWeather;
