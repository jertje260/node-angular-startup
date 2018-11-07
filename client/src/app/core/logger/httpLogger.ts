import { ILogger } from "./ILogger";

export class HttpLogger implements ILogger {
    trace(message: string, ...supportingData: any[]): void {
        throw new Error("Method not implemented.");
    }
    debug(message: string, ...supportingData: any[]): void {
        throw new Error("Method not implemented.");
    }
    warn(message: string, ...supportingData: any[]): void {
        throw new Error("Method not implemented.");
    }
    error(message: string, ...supportingData: any[]): void {
        throw new Error("Method not implemented.");
    }
    info(message: string, ...supportingData: any[]): void {
        throw new Error("Method not implemented.");
    }
}
