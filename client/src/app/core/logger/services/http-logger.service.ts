import { ILogMessage, LogMessageLevel } from '../interfaces/ILogMessage';
import { Injectable, Inject } from '@angular/core';
import { ILogPublisher } from '../interfaces/ILogPublisher';
import { HttpClient } from '@angular/common/http';
import { LogConfigService } from './log-config.service';
import { ILoggersConfiguration } from '../interfaces/ILoggersConfiguration';
import { IPublisherConfiguration } from '../interfaces/IPublisherConfiguration';

@Injectable()
export class HttpLoggerService implements ILogPublisher {

    constructor(@Inject(LogConfigService) private config: ILoggersConfiguration, private httpClient: HttpClient) { }

    public async publishLog(logMessage: ILogMessage): Promise<void> {
        await this.httpClient.post('api/log', logMessage);
    }


    public getConfig(): IPublisherConfiguration {
        return this.config.http;
    }

}
