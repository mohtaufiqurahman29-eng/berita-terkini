import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.json({ message: "SERVER OK" });
});
const API_KEY = import.meta.env.VITE_API_KEY;

app.get("/api/news", async (req, res) => {
    const response = await fetch(
    `https://newsapi.org/v2/everything?q=indonesia&language=id&apiKey=${API_KEY}`
    );
    const data = await response.json();
res.json(data.articles || []); // ✅ kirim langsung array ke frontend
});

app.listen(5000, () => console.log("✅ Server jalan di http://localhost:5000"));