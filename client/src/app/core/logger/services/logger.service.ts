import { Injectable } from '@angular/core';
import { ILogMessage, LogMessageLevel } from '../interfaces/ILogMessage';

import { AbstractLogPublisherService } from '../abstract/ILogPublisherService';
import { ILogPublisher } from '../interfaces/ILogPublisher';
import { ILoggerService } from '../interfaces/ILoggerService';
import { IPublisherConfiguration } from '../interfaces/IPublisherConfiguration';
import { LogLevel } from '../enums/LogLevel';

@Injectable()
export class LoggerService implements ILoggerService {

    private INFO = 'info';
    private WARN = 'warn';
    private ERROR = 'error';
    private DEBUG = 'debug';


    publishers: ILogPublisher[];

    constructor(private publishersService: AbstractLogPublisherService) {
        this.publishers = publishersService.publishers;
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

    private emitLogMessage(messageType: LogMessageLevel, msg: string, supportingDetails: any[]) {
        const message: ILogMessage = {
            logLevel: messageType,
            logArguments: supportingDetails,
            logMessage: msg
        };

        this.publishers.forEach(async (pub) => {
            if (this.shouldSendMessage(message.logLevel, pub.getConfig())) {
                await pub.publishLog(message);
            }
        });
    }

    public shouldSendMessage(level: LogMessageLevel, config: IPublisherConfiguration): boolean {
        switch (config.level) {
            case LogLevel.All:
            case LogLevel.Debug: {
                return true;
            }
            case LogLevel.Info: {
                if (level === this.DEBUG) {
                    return false;
                }
                return true;
            }
            case LogLevel.Warn: {
                if (level === this.DEBUG || level === this.INFO) {
                    return false;
                }
                return true;
            }
            case LogLevel.Error: {
                if (level === this.ERROR) {
                    return true;
                }
                return false;
            }
            case LogLevel.Off: {
                return false;
            }
        }
    }
}
