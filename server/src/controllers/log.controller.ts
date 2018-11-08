import { Request, Response } from "express";

interface ILogMessage {
    logLevel: "info" | "warn" | "error" | "debug" | "trace";
    logMessage: string;
    logArguments: any[];
}

export const postLog = (req: Request, res: Response) => {
    console.log(req.body);
    const message: ILogMessage = req.body;
    console[message.logLevel]("[FRONTEND] " + message.logMessage, message.logArguments);

    res.statusCode = 200;
    res.send();
};
