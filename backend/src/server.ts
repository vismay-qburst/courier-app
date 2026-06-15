import express from "express";

const app = express();

app.get("/health", (_, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server running my boi");
});