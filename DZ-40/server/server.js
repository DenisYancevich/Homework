import express from "express";
import bodyParser from "body-parser";
import { WebSocketServer } from "ws";

const PORT = 4444;

const app = express();

const data = [
  { id: 1, emoji: "😂", count: 0 },
  { id: 2, emoji: "😢", count: 0 },
  { id: 3, emoji: "😉", count: 0 },
  { id: 4, emoji: "😊", count: 0 },
  { id: 5, emoji: "🥳", count: 0 },
  { id: 6, emoji: "🤮", count: 0 },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  res.append("Access-Control-Allow-Methods", "GET,POST");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}!`);
});

const wss = new WebSocketServer({ port: 8080 });

const wsCollection = [];

wss.on("connection", function connection(ws) {
  wsCollection.push(ws);

  ws.on("error", () => {
    console.log("Error");
  });
});

app.get("/getInfo", async (req, res) => {
  res.status(200).json(data);
});

app.get("/getBestEmoji", async (req, res) => {
  let dataIns = [];
  dataIns.push(data[0]);
  for (let i = 1; i < data.length; i++) {
    if (dataIns[0].count < data[i].count && data[i].count != 0) {
      dataIns = [];
      dataIns[0] = data[i];
    } else if (dataIns[0].count == data[i].count && data[i].count != 0) {
      dataIns.push(data[i]);
    }
  }
  res.status(200).json(dataIns);
});

app.post("/addCount", async (req, res) => {
  const { id } = req.body;
  if (id) {
    const obj = data.find((e) => e.id == id);
    if (obj) {
      obj.count = obj.count + 1;
      wsCollection.forEach((e) =>
        e.send(JSON.stringify({ callsign: "event", type: "update" }))
      );
      res.status(200).json({ result: "ok" });
    } else {
      res
        .status(400)
        .json({
          result: "error",
          errorMessage: "Your emoji not found in list!",
        });
    }
  } else {
    res
      .status(400)
      .json({
        result: "error",
        errorMessage: "You need to include emoji to raise the count!",
      });
  }
});
