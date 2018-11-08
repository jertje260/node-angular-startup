import { LoggerService } from './logger.service';
import { ApiLoggerService } from './api-logger.service';
import { ILogMessage } from './ILogMessage';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class HttpLoggerService implements LoggerService {

    constructor(private apiLogger: ApiLoggerService) {}

    trace(message: string, ...supportingData: any[]): void {
        this.emitLogMessage('trace', message, supportingData);
    }
    debug(message: string, ...supportingData: any[]): void {
        this.emitLogMessage('debug', message, supportingData);
    }
    warn(message: string, ...supportingData: any[]): void {
        this.emitLogMessage('warn', message, supportingData);
    }
    error(message: string, ...supportingData: any[]): void {
        this.emitLogMessage('error', message, supportingData);
    }
    info(message: string, ...supportingData: any[]): void {
        this.emitLogMessage('info', message, supportingData);
    }

    private emitLogMessage(messageType: 'debug' | 'info' | 'warn' | 'error' | 'trace', msg: string, supportingDetails: any[]) {
        const logMessage: ILogMessage = {
            logLevel: messageType,
            logArguments: supportingDetails,
            logMessage: msg
        };

        this.apiLogger.sendLogMessage(logMessage);
    }
}
