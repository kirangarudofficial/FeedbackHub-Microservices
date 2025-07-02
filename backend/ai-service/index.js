const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  const prompt = `Analyze this feedback and return a short summary and sentiment (positive, neutral, or negative):\n"${text}"`;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100,
      temperature: 0.5,
    });

    const output = response.data.choices[0].text.trim();
    const summary = output;
    const sentiment = output.includes("positive")
      ? "positive"
      : output.includes("negative")
      ? "negative"
      : "neutral";

    res.json({ summary, sentiment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(4002, () => console.log("AI Service running on port 4002"));
