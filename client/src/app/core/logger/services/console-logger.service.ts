import { Injectable, Inject } from '@angular/core';
import { ILogPublisher } from '../interfaces/ILogPublisher';
import { ILogMessage } from '../interfaces/ILogMessage';
import { IPublisherConfiguration } from '../interfaces/IPublisherConfiguration';
import { environment } from '@env/environment';


@Injectable()
export class ConsoleLoggerService implements ILogPublisher {

    constructor() { }

    publishLog(logMessage: ILogMessage): Promise<void> {
        this.emitLogMessage(logMessage.logLevel, logMessage.logMessage, logMessage.logArguments);
        return Promise.resolve();
    }


    private emitLogMessage(messageType: 'debug' | 'info' | 'warn' | 'error', msg: string, supportingDetails: any[]) {

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

    public getConfig(): IPublisherConfiguration {
        return environment.logConfig.console;
    }
}
