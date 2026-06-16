import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
  }));

app.get("/health", (_, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server running my boi");
});

app.get("/api/hello", (_, res) => {
  res.json({ message: "Hello from backend!" });
});