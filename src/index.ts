import { Request, Response } from "express";
import db from "./db.json";

const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
	res.send(db).status(200);
});
