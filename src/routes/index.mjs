import { Router } from "express";

const routesHandler = new Router();

routesHandler.get("/", (req, res) => {
	res.status(200).render("index");
});
routesHandler.get("/pellicules-solaires", (req, res) => {
	res.status(200).render("pellicules-solaires");
});
routesHandler.get("/residentiel", (req, res) => {
	res.status(200).render("residential");
});
routesHandler.get("/commercial", (req, res) => {
	res.status(200).render("commercial");
});
export default routesHandler;
