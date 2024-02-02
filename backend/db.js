const mongoose = require("mongoose");
const dbConnect = require("./secrets");

mongoose.connect(dbConnect.url);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo,
};
