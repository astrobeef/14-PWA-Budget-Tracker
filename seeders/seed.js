const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Budget", {
    useNewUrlParser : true
});

const transactionSeed = [{
    name: "Small loan",
    value: 1000
}];

db.Transaction.deleteMany({})
    .then(() => db.Transaction.collection.insertMany(transactionSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(error => {
        console.log(error);
        process.exit(1);
    });