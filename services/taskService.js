let tasks = [{ title: "Task ", description: "Description for Task " }];
let idCounter = 1;

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  console.log(`Looking for task with ID: ${id}`);
  const task = tasks.find((task) => task.id === id);
  console.log(`Found task: ${JSON.stringify(task)}`);
  return task;
}

function createTask(title, description) {
  const newTask = { id: idCounter++, title, description };
  tasks.push(newTask);
  return newTask;
}

function updateTask(id, title, description) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return null;
  }
  tasks[taskIndex] = { ...tasks[taskIndex], title, description };
  return tasks[taskIndex];
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return null;
  }
  const deletedTask = tasks.splice(taskIndex, 1)[0];
  return deletedTask;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
