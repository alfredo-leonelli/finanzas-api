import express, { Router } from "express";
import * as userController from "../controllers/userController";

const router: Router = express.Router();

router.post("/user", userController.createUser);
router.post("/login", userController.login);

export { router as userRouter };
