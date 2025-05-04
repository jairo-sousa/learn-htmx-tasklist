const express = require("express");
const router = express.Router();

const { sequelize, Sequelize } = require("sequelize");
const Todo = require("../models/todo");

/**
 * @typedef {Object} TodoModel
 * @property {number|string} id - unique identifier
 * @property {string} title - Title/description of todo
 * @property {boolean} completed - Indicates finished todo
 */

/**
 * Create html template for todo object
 * @param {TodoModel} todo
 * @returns {string}
 */
const createTodoTemplate = (todo) => `
    <li id="todo-${
        todo.id
    }" class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo.title}</span>
        <div>
            <form class="d-inline" hx-put="/api/todos/${
                todo.id
            }" hx-target="#todo-${todo.id}" hx-swap="outerHTML">
                <input type="hidden" name="completed" value="${!todo.completed}">
                <button type="submit" class="btn btn-link p-0">
                    ${todo.completed ? "Desmarcar" : "Marcar conclusão"}
                </button>
            </form>
            <form class="d-inline" hx-delete="/api/todos/${
                todo.id
            }" hx-target="#todo-${todo.id}" hx-swap="outerHTML">
                <button class="btn btn-danger btn-sm">Excluir</button>
            </form>
        </div>
    </li>
`;

router.get("/todos", async (req, res) => {
    const todos = await Todo.findAll();

    const todoItems = todos.map(createTodoTemplate).join("");

    res.send(todoItems);
});

router.post("/todos", async (req, res) => {
    const { title } = req.body;

    const newTodo = await Todo.create({
        title,
    });

    res.send(createTodoTemplate(newTodo));
});

router.delete("/todos/:id", async (req, res) => {
    const id = req.params;

    await Todo.destroy({ where: id });

    const todos = await Todo.findAll();

    const todoItems = todos.map(createTodoTemplate).join("");

    res.send(todoItems);
});

router.put("/todos/:id", async (req, res) => {
    const { id } = req.params;

    const { completed } = req.body;

    await Todo.update(
        {
            completed: JSON.parse(completed),
        },
        { where: { id } }
    );
    const updatedTodo = await Todo.findByPk(id);
    res.send(createTodoTemplate(updatedTodo));
});

router.post("/search", async (req, res) => {
    const { search } = req.body;

    let where = {};

    if (search) where.title = { [Sequelize.Op.like]: `%${search}%` };

    const todos = await Todo.findAll({ where });

    const todoItems = todos.map(createTodoTemplate).join("");

    res.send(todoItems);
});

module.exports = router;
