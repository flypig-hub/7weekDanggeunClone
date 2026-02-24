const { writeLog } = require("../utils/log-writer");
const { recordRequest } = require("../utils/monitoring-store");

const requestMiddleware = (req, res, next) => {
  const start = process.hrtime.bigint();

  res.on("finish", () => {
    const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000;
    const route = req.originalUrl || req.url;

    const payload = {
      type: "access",
      method: req.method,
      route,
      statusCode: res.statusCode,
      durationMs: Number(durationMs.toFixed(2)),
      ip: req.ip,
      userAgent: req.get("user-agent") || "unknown",
    };

    recordRequest({
      method: req.method,
      route,
      statusCode: res.statusCode,
      durationMs: payload.durationMs,
    });

    writeLog("access", payload);

    if (res.statusCode >= 500) {
      writeLog("error", {
        type: "server_error",
        ...payload,
      });
    }
  });

  next();
};

module.exports = requestMiddleware;
