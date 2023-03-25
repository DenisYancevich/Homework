import express from "express";
import bodyParser from "body-parser";
import postWeather from "./apiCall.js";

const PORT = 4444;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}!`);
});

app.post("/weather", async (req, res) => {
  const { city } = req.body;
  if (city) {
    const obj = await postWeather(city);
    if (obj.status === 200) {
      const {
        wind: { speed: windSpeed },
        main: { temp: mainTemp },
      } = obj.data;
      res.status(200).json({ windSpeed: windSpeed, temp: mainTemp });
    } else {
      res.status(obj.response.status).json(obj.response.data);
    }
  } else {
    res.status(400).json({ msg: "City is required" });
  }
});
