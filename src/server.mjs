import app from "./app.mjs";
import https from "https";
import { readFileSync } from "fs";

const server = https.createServer(
	{
		key: readFileSync("key.pem"),
		cert: readFileSync("cert.pem"),
	},
	app
);
const PORT = 443;

server.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}`);
});
