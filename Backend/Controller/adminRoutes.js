const express = require("express");

const { users } = require("../Model/userModel");

const { tasks } = require("../Model/taskModel");

const { auth } = require("../Middleware/auth");

const {
  permissonAuth,
} = require("../Middleware/RoleBasedAccessControl_Auth");

const adminRoute = express.Router();

adminRoute.use(auth)

// GET ALL USERS
adminRoute.get(
  "/allusers",
  permissonAuth(["Admin"]),
  async (req, res) => {
    try {
      const allUsers = await users.find().select("-pass");

      res.status(200).send(allUsers);
    } catch (error) {
      res.status(400).send(error);
    }
  }
);


// DELETE USER
adminRoute.delete(
  "/deleteuser/:id",
  permissonAuth(["Admin"]),
  async (req, res) => {
    try {
      const { id } = req.params;

      await users.findByIdAndDelete(id);

      res.status(200).send("User deleted successfully");
    } catch (error) {
      res.status(400).send(error);
    }
  }
);


// UPDATE USER STATUS
adminRoute.patch(
  "/status/:id",
  permissonAuth(["Admin"]),
  async (req, res) => {
    try {
      const { id } = req.params;

      const { status } = req.body;

      await users.findByIdAndUpdate(id, {
        status,
      });

      res.status(200).send("Status updated");
    } catch (error) {
      res.status(400).send(error);
    }
  }
);


// VIEW ALL TASKS
adminRoute.get(
  "/alltasks",
  permissonAuth(["Admin"]),
  async (req, res) => {
    try {
      const allTasks = await tasks
        .find()
        .populate("createdBy");

      res.status(200).send(allTasks);
    } catch (error) {
      res.status(400).send(error);
    }
  }
);


// DELETE ANY TASK
adminRoute.delete(
  "/deletetask/:id",
  permissonAuth(["Admin"]),
  async (req, res) => {
    try {
      const { id } = req.params;

      await tasks.findByIdAndDelete(id);

      res.status(200).send("Task deleted by admin");
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

module.exports = { adminRoute };