const express = require("express");
const {
  getHealth,
  getStatsSnapshot,
  getRecentLogs,
} = require("../controller/monitoringController");

const monitoringRouter = express.Router();

monitoringRouter.get("/health", getHealth);
monitoringRouter.get("/stats", getStatsSnapshot);
monitoringRouter.get("/logs", getRecentLogs);

module.exports = monitoringRouter;
