const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getGoal, getQuote } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune)
app.get('/api/quote', getQuote)

app.post('/api/goals', getGoal)

app.listen(4000, () => console.log("Server running on 4000"));
