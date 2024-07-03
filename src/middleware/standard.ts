import rateLimit from "express-rate-limit";
import { logger } from "../config/winston";

const validatedUnauthorised = rateLimit({
  windowMs: 10 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).send({ error: "Too many requests" });
    var ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    logger.warn(`A rate limit has been reached from: ${ip}`);
  },
});

export default validatedUnauthorised;
