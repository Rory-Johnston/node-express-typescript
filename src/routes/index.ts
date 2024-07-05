import express from "express";
import { logger } from "../config/winston";
import ratelimit from "../middleware/ratelimit";

const router = express.Router();

router.use(ratelimit);

router.get("/status", (req, res) => {
  logger.info("Status request received");
  res.status(200).json({ status: "OK" });
});

export default router;
