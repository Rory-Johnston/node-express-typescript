import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes";
import helmet from "helmet";
import { logger } from "./config/winston";
import { cors_middleware } from "./config/cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "24mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors_middleware);
app.use("/", router);

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
