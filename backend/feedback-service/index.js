const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: "kiran",
  host: "db",
  database: "feedbackdb",
  password: "secret",
  port: 5432,
});

app.post("/feedback", async (req, res) => {
  const { text } = req.body;

  try {
    const aiRes = await axios.post("http://ai-service:4002/analyze", { text });
    const { summary, sentiment } = aiRes.data;

    const query = `
      INSERT INTO feedback (text, summary, sentiment, created_at)
      VALUES ($1, $2, $3, NOW()) RETURNING *;
    `;
    const values = [text, summary, sentiment];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

app.get("/feedback", async (req, res) => {
  const result = await pool.query("SELECT * FROM feedback ORDER BY created_at DESC");
  res.json(result.rows);
});

app.listen(4001, () => console.log("Feedback Service on port 4001"));
