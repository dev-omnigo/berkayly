import app from "./app.mjs";
import http from "http";

const server = http.createServer({}, app);
const PORT = process.env.PORT || "8080";

server.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}`);
});
