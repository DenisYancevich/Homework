import express from "express";
import bodyParser from "body-parser";

const PORT = 4444;

const app = express();

const data = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  res.append("Access-Control-Allow-Methods", "GET,POST");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(PORT, () => {
  messageLog(`Listening to ${PORT}!`);
});

app.get("/addUser", async (req, res) => {
  const userId = (Math.random() + 1).toString(36).substring(7);
  data.push({ userId: userId, data: [] });
  console.log(`New user added: ${userId}`);
  res.status(200).json(userId);
});

app.post("/getInfo", async (req, res) => {
  const { userId } = req.body;
  if (data.find((el) => el.userId == userId)) {
    res.status(200).json(data.find((el) => el.userId == userId).data);
  } else {
    res.status(400).json({ state: "notFound" });
  }
});

app.post("/updateState", async (req, res) => {
  const { userId, id, state } = req.body;
  if (data.find((el) => el.userId == userId)) {
    data
      .find((el) => el.userId == userId)
      .data.find((el) => el.id == id).stateComplete = state;
    res.status(200).json(data.find((el) => el.userId == userId).data);
  } else {
    res.status(400).json({ state: "notFound" });
  }
});

app.post("/addToDo", async (req, res) => {
  const { userId, text } = req.body;
  if (data.find((el) => el.userId == userId)) {
    const dataTemp = data.find((el) => el.userId == userId).data;
    data
      .find((el) => el.userId == userId)
      .data.push({
        id: dataTemp.length > 0 ? dataTemp[dataTemp.length - 1].id + 1 : 1,
        text: text,
        stateComplete: false,
      });
    res.status(200).json(data.find((el) => el.userId == userId).data);
  } else {
    res.status(400).json({ state: "notFound" });
  }
});

const messageLog = (text) => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  const textDate = d.toISOString();
  console.log(`runtime ${textDate}: ${text}`);
};
