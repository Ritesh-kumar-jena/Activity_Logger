const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    action: {
      type: String,
      required: true,
    },

    details: {
      type: String,
    },
  },
  { timestamps: true , versionKey:false}
);

const activityLogs= mongoose.model("ActivityLog", activityLogSchema);

module.exports = {activityLogs}