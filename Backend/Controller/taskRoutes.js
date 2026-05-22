const express = require("express");

const { tasks } = require("../Model/taskModel");

const { auth } = require("../Middleware/auth");

const { createActivity } = require("../Utils/createActivity");

const taskRoute = express.Router();

taskRoute.use(auth)


// CREATE TASK
taskRoute.post("/create", async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTask = new tasks({
      title,
      description,
      createdBy: req.userData._id,
    });

    await newTask.save();

    await createActivity(
      req.userData._id,
      "TASK_CREATED",
      `Created task ${title}`
    );

    res.status(200).send({
      msg: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});


// GET OWN TASKS
taskRoute.get("/mytasks", async (req, res) => {
  try {
    const allTasks = await tasks.find({
      createdBy: req.userData._id,
    });

    res.status(200).send(allTasks);
  } catch (error) {
    res.status(400).send(error);
  }
});


// UPDATE OWN TASK
taskRoute.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const task = await tasks.findById(id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    if (
      task.createdBy.toString() !==
      req.userData._id.toString()
    ) {
      return res
        .status(403)
        .send("You are not authorized");
    }

    await tasks.findByIdAndUpdate(id, req.body);

    await createActivity(
      req.userData._id,
      "TASK_UPDATED",
      `Updated task ${task.title}`
    );

    res.status(200).send("Task updated successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});


// DELETE OWN TASK
taskRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const task = await tasks.findById(id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    if (
      task.createdBy.toString() !==
      req.userData._id.toString()
    ) {
      return res
        .status(403)
        .send("You are not authorized");
    }

    await tasks.findByIdAndDelete(id);

    await createActivity(
      req.userData._id,
      "TASK_DELETED",
      `Deleted task ${task.title}`
    );

    res.status(200).send("Task deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { taskRoute };