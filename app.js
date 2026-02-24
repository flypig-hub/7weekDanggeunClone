const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDb = require("./database/database");
const reqlogMiddleware = require("./middlewares/request-log-middleware");
const { writeLog } = require("./utils/log-writer");

const UserRouter = require("./router/userRouter");
const PostRouter = require("./router/postRouter");
const likeRouter = require("./router/likeRouter");
const monitoringRouter = require("./router/monitoringRouter");

const PORT = Number(process.env.PORT) || 8080;
const app = express();

connectDb().catch((error) => {
  console.error("MongoDB connection failed:", error.message);
  writeLog("error", { type: "mongodb_connect_error", message: error.message });
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("connection error:", error);
  writeLog("error", { type: "mongodb_runtime_error", message: String(error) });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(reqlogMiddleware);
app.use(cors({ origin: "*", credentials: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/user", UserRouter);
app.use("/api/post", PostRouter);
app.use("/api/like", likeRouter);
app.use("/api/monitoring", monitoringRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

process.on("unhandledRejection", (reason) => {
  writeLog("error", { type: "unhandledRejection", reason: String(reason) });
});

process.on("uncaughtException", (error) => {
  writeLog("error", {
    type: "uncaughtException",
    message: error.message,
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} 포트로 서버가 켜졌어요~!`);
});
