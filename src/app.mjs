import express from "express";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import routesHandler from "./routes/index.mjs";

config();
const __filename = fileURLToPath(import.meta.url);
const __direname = path.dirname(__filename);

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static(path.join(__direname, "../public")));
app.use("/", routesHandler);

export default app;
