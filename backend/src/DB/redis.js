import { createClient } from "redis";
// console.log(process.env.REDIS_URL);/
const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  console.log("Redis URL is not defined");
  process.exit(1);
}

const redisClient = createClient({
  url: redisUrl,
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

await redisClient
  .connect()
  .then(() => {
    console.log("Redis Client Connected");
  })
  .catch((err) => {
    console.log("Redis Client Error", err);
    process.exit(1);
  });

export default redisClient;
