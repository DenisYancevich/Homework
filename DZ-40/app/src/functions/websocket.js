export const getWebsocketReady = (callback) => {
  const ws = new WebSocket("ws://localhost:8080");

  ws.addEventListener("open", (event) => {
    console.log("connection opened!");
  });

  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.callsign === "event") {
      if (message.type === "update") {
        callback();
      }
    }
  });

  ws.addEventListener("error", (event) => {
    console.log("connection error: " + event.error);
  });

  ws.addEventListener("close", (event) => {
    console.log("connection closed!");
  });
};

export default getWebsocketReady;
