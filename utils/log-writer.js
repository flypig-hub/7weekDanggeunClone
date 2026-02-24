const fs = require("fs");
const path = require("path");

const LOG_DIR = path.join(__dirname, "..", "logs");

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

const streamMap = new Map();

function getDateStamp() {
  return new Date().toISOString().slice(0, 10);
}

function getLogFilePath(type) {
  return path.join(LOG_DIR, `${type}-${getDateStamp()}.log`);
}

function getStream(type) {
  const dateKey = `${type}-${getDateStamp()}`;
  const cached = streamMap.get(dateKey);
  if (cached) {
    return cached;
  }

  for (const key of streamMap.keys()) {
    if (key.startsWith(`${type}-`) && key !== dateKey) {
      const oldStream = streamMap.get(key);
      if (oldStream) oldStream.end();
      streamMap.delete(key);
    }
  }

  const stream = fs.createWriteStream(getLogFilePath(type), { flags: "a" });
  streamMap.set(dateKey, stream);
  return stream;
}

function writeLog(type, payload) {
  const stream = getStream(type);
  const line = JSON.stringify({ timestamp: new Date().toISOString(), ...payload });
  stream.write(`${line}\n`);
}

function readRecentLogs(type, limit = 50) {
  const safeLimit = Math.min(Math.max(Number(limit) || 50, 1), 200);
  const filePath = getLogFilePath(type);

  if (!fs.existsSync(filePath)) {
    return [];
  }

  const file = fs.readFileSync(filePath, "utf8");
  return file
    .trim()
    .split("\n")
    .filter(Boolean)
    .slice(-safeLimit)
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        return { raw: line };
      }
    });
}

module.exports = {
  writeLog,
  readRecentLogs,
};
