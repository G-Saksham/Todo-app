const express = require("express");
// const bodyParse = require("body-parse");
const app = express();
const { createTodo, updateTodo } = require("./types.js");
const { Todo } = require("./db.js");
const cors = require("cors")

app.use(express.json());
app.use(cors({}));

app.post("/todo", async (req, res) => {
  // Add the new todo logic
  try {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
      throw error;
    }
    // save it in the mongodb
    await Todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });

    res.status(200).json({
      msg: "Todo is creaated, Successfully",
    });
  } catch (error) {
    res.status(400).json({
      msg: "Somethings Wrong, check your inputs!",
    });
  }
});

app.get("/todos", async (req, res) => {
  //viewing the todos logic
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (error) {
    res.status(400).json({
      msg: "Somethings gone Wrong",
    });
  }
});

app.put("/completed", async (req, res) => {
  //mark as done logic
  try {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
      throw err;
    }
    // update it in the mongodb
    await Todo.updateOne({ 
      _id: updatePayload.id 
    }, { 
      $set:  {completed: true} 
    });

    res.status(200).json({
      msg: "Todo is updated, Successfully",
    });
  } catch (error) {
    res.status(411).json({
      msg: "Somethings Wrong, can't update a todo",
    });
  }
});

app.listen(3000);
