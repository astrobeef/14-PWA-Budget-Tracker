const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = process.env.MONGODB_URI || "budget";
const collections = ["budget"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

const PORT = process.env.PORT || 3550;

app.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});