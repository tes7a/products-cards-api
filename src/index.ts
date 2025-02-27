import { Request, Response } from "express";
import db from "./db.json";

const express = require("express");
const app = express();
const port = 3001;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
	res.send(db).status(200);
});
