import { Router } from "express";
import { fileURLToPath } from "url";
import path from "path";

const routesHandler = new Router();
const __filename = fileURLToPath(import.meta.url);
const __direname = path.dirname(__filename);

routesHandler.get("/", (req, res) => {
	res.status(200).sendFile(
		path.join(__direname, "../../public/html/index.html")
	);
});
routesHandler.get("/residentiel", (req, res) => {
	res.status(200).sendFile(
		path.join(__direname, "../../public/html/residential.html")
	);
});
routesHandler.get("/commercial", (req, res) => {
	res.status(200).sendFile(
		path.join(__direname, "../../public/html/commercial.html")
	);
});
export default routesHandler;
