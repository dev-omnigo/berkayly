import { Router } from "express";
import { fileURLToPath } from "url";
import path from "path";

const routesHandler = new Router();
const __filename = fileURLToPath(import.meta.url);
const __direname = path.dirname(__filename);

routesHandler.use("/", (req, res) => {
	res.status(200).sendFile(path.join(__direname, "../../public/html/index.html"))
});

export default routesHandler;
