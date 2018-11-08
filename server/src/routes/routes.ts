import * as logController from "../controllers/log.controller";

export let routes = (app: any) => {
    // set routes here
    app.post("/api/log", logController.postLog);
};
