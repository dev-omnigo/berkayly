import { Router } from "express";

const routesHandler = new Router();

routesHandler.get("/", (req, res) => {
	res.status(200).render("index");
});
routesHandler.get("/pellicules-solaires", (req, res) => {
	res.status(200).render("pellicules-solaires");
});
routesHandler.get("/pellicules-de-securites", (req, res) => {
	res.status(200).render("pellicules-de-securites");
});
routesHandler.get("/realisations", (req, res) => {
	res.status(200).render("realisations");
});
routesHandler.get("/residentiel", (req, res) => {
	res.status(200).render("residential");
});
routesHandler.get("/commercial", (req, res) => {
	res.status(200).render("commercial");
});

routesHandler.use("/*", (req, res)=> res.status(404).render("404"))
export default routesHandler;
