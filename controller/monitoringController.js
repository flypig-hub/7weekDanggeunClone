const { getStats } = require("../utils/monitoring-store");
const { readRecentLogs } = require("../utils/log-writer");

const getHealth = (req, res) => {
  return res.status(200).json({
    status: "ok",
    service: "7weekDanggeunClone",
    now: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  });
};

const getStatsSnapshot = (req, res) => {
  return res.status(200).json({
    status: "ok",
    data: getStats(),
  });
};

const getRecentLogs = (req, res) => {
  const type = req.query.type === "error" ? "error" : "access";
  const limit = req.query.limit || 50;

  return res.status(200).json({
    status: "ok",
    type,
    logs: readRecentLogs(type, limit),
  });
};

module.exports = {
  getHealth,
  getStatsSnapshot,
  getRecentLogs,
};
