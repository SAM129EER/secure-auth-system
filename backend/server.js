import "./src/config/env.js"; //this should be on top
import "./src/DB/redis.js";
// console.log(process.env.REDIS_URL);

import connectDB from "./src/DB/db.js";
import app from "./src/app.js";
const PORT = process.env.PORT || 5000;

try {
  await connectDB();

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (error) {
  console.log(error);
}
