const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

// Routes
router.get("/:id", taskController.getTaskById);
router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
