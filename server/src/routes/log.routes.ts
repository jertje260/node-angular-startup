import * as express from "express";
import * as logController from "../controllers/log.controller";

export default express
 .Router()
 .post("/", logController.postLog);
