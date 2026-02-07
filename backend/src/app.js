import express from "express";
import authRouter from "./routes/authRoutes.js";


const app = express();
app.use(express.json());
// 🔐 Manual sanitize (NoSQL injection safe)
import sanitize from "./middlewares/sanitize.js";
app.use(sanitize);

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
