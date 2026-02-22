const mongoose = require("mongoose");
const env = require("../config/env");

function connectDb() {
  if (!env.mongodbUri) {
    console.warn("MONGODB_URI가 설정되지 않아 DB 연결을 건너뜁니다.");
    return Promise.resolve();
  }

  return mongoose.connect(env.mongodbUri, {
    ignoreUndefined: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectDb;
//----------------------------------------------//
