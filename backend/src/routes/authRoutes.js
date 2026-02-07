import express from "express";
import authController from "../controllers/authControllers.js";
import validate from "../middlewares/validate.js";
import { registerSchema, loginSchema } from "../validators/user.validator.js";
import authControllers from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", validate(registerSchema), authController.register);

router.post("/login", validate(loginSchema), authController.login);

router.post("/logout", authController.logout);

export default router;
