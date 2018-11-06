import express, { Request } from "express";
import { routes } from "./routes/routes";

const app = express();

app.set("port", process.env.PORT || 3000);

// all routing
routes(app);

// add static folder
app.use(express.static(__dirname + "/public"));

// default routing to static folder
app.get("*", (req: Request, res: any) => {
    res.setHeader("content-type", "text/html");
    res.sendFile(__dirname + "/public/index.html");
});
console.log("henk");

export default app;
