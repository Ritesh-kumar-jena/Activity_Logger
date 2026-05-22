const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },{versionKey:false , timestamps: true });

const tasks = mongoose.model("Task", taskSchema);
module.exports={tasks}