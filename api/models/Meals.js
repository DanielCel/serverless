const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Meals = mongoose.model(
  "Meal",
  new mongoose.Schema({
    name: String,
    desc: String
  })
);

module.exports = Meals;
