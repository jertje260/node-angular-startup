import { ILogger } from "./ILogger";

export class ConsoleLogger implements ILogger {
    trace(message: string, ...supportingData: any[]): void {
        this.emitLogMessage("trace", message, supportingData);
    }
    debug(message: string, ...supportingData: any[]): void {
        this.emitLogMessage("debug", message, supportingData);
    }
    warn(message: string, ...supportingData: any[]): void {
        this.emitLogMessage("warn", message, supportingData);
    }
    error(message: string, ...supportingData: any[]): void {
        this.emitLogMessage("error", message, supportingData);
    }
    info(message: string, ...supportingData: any[]): void {
        this.emitLogMessage("info", message, supportingData);
    }

    private emitLogMessage(messageType: "debug" | "info" | "warn" | "error" | "trace", msg: string, supportingDetails: any[]) {
        // some browsers dont have a console :S
        if (!window.console || !console[messageType]) {
            return;
        }

        if (supportingDetails.length > 0) {
            console[messageType](msg, supportingDetails);
        } else {
            console[messageType](msg);
        }
    }
}
