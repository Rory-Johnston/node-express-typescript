import express from "express";
import { logger } from "../config/winston";
import validatedUnauthorised from "../middleware/standard";

const router = express.Router();

router.use(validatedUnauthorised);

router.get("/status", (req, res) => {
  logger.info("Status request received");
  res.status(200).json({ status: "OK" });
});

export default router;
