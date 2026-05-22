const { activityLogs } = require("../Model/activitylogModel");

const createActivity = async (
  userId,
  action,
  detailsS
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