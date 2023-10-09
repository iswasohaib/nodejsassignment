const taskService = require("../services/taskService");

let tasks = [];

function getAllTasks(req, res) {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
}

function getTaskById(req, res) {
  const { id } = req.params;
  const task = taskService.getTaskById(parseInt(id));
  if (!task) {
    res.status(404).json({ error: "Task not found" });
  } else {
    res.json(task);
  }
}

function createTask(req, res) {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json({ error: "Title and description are required" });
  } else {
    const newTask = taskService.createTask(title, description);
    res.status(201).json(newTask);
  }
}

function updateTask(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatedTask = taskService.updateTask(parseInt(id), title, description);
  if (!updatedTask) {
    res.status(404).json({ error: "Task not found" });
  } else {
    res.json(updatedTask);
  }
}

function deleteTask(req, res) {
  const { id } = req.params;
  const deletedTask = taskService.deleteTask(parseInt(id));
  if (!deletedTask) {
    res.status(404).json({ error: "Task not found" });
  } else {
    res.json({ message: "Task deleted successfully" });
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
