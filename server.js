const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = process.env.MONGODB_URI || "budget";
const collections = ["transactions"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error: ", error);
});

app.get("/", (req, res) => {
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3600;

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
})