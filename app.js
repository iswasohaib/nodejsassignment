const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5900;

app.use(bodyParser.json());

// Routes
const tasksRouter = require("./routes/tasks");
app.use("/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
