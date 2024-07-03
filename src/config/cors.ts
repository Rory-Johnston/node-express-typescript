import cors from "cors";

const isProduction = process.env.NODE_ENV === "production";

const cors_options = {
  origin: isProduction ? ["", ""] : "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

export const cors_middleware = cors(cors_options);
