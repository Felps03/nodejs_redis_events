const Redis = require("ioredis");

const redisClient = new Redis({
  host: "localhost",
  port: 6379,
  db: 0,
});

redisClient.ping((err, result) => {
  if (err) {
    console.error("Failed to connect to Redis.");
  } else {
    console.log("Connected to Redis successfully.");
  }
});

const getValue = async (key) => {
  try {
    const result = await redisClient.get(key);
    return result;
  } catch (error) {
    throw Error(error);
  }
};

const setValue = async (key, value) => {
  try {
    const result = await redisClient.set(key, value);
    return result;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getValue,
  setValue,
};
