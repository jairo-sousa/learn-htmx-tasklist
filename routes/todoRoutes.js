const express = require("express");
const router = express.Router();

const { sequelize } = require("sequelize");
const Todo = require("../models/todo");

router.post("/todos", async (req, res) => {
    const { title } = req.body;

    const newTodo = await Todo.create({
        title,
    });

    res.send("Todo criado!");
});

module.exports = router;
