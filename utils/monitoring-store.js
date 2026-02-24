const stats = {
  startedAt: new Date().toISOString(),
  totalRequests: 0,
  methods: {},
  statusClasses: {
    "2xx": 0,
    "3xx": 0,
    "4xx": 0,
    "5xx": 0,
  },
  routeHits: {},
  averageResponseTimeMs: 0,
};

function updateAverage(prevAvg, count, nextValue) {
  return prevAvg + (nextValue - prevAvg) / count;
}

function recordRequest({ method, route, statusCode, durationMs }) {
  stats.totalRequests += 1;
  stats.methods[method] = (stats.methods[method] || 0) + 1;
  stats.routeHits[route] = (stats.routeHits[route] || 0) + 1;

  const statusClass = `${String(statusCode)[0]}xx`;
  if (stats.statusClasses[statusClass] !== undefined) {
    stats.statusClasses[statusClass] += 1;
  }

  stats.averageResponseTimeMs = Number(
    updateAverage(stats.averageResponseTimeMs, stats.totalRequests, durationMs).toFixed(2)
  );
}

function getStats() {
  return {
    ...stats,
    uptimeSeconds: Math.floor(process.uptime()),
    memory: process.memoryUsage(),
  };
}

module.exports = {
  recordRequest,
  getStats,
};
