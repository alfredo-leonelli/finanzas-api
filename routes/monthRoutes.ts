import express, { Router } from "express";
import * as monthController from "../controllers/monthController";
import verificarToken from "../middlewares/auth";

const router: Router = express.Router();

router.post("/month", verificarToken, monthController.createMonth);
router.post("/entry", verificarToken, monthController.createEntry);

export { router as monthRouter };
