const { activityLogs } = require("../Model/activityModel");

const createActivity = async (
  userId,
  action,
  details
) => {
  try {
    await activityLogs.create({
      user: userId,
      action,
      details,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createActivity };