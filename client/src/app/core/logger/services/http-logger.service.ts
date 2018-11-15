import { ILogMessage, LogMessageLevel } from '../interfaces/ILogMessage';
import { Injectable, Inject } from '@angular/core';
import { ILogPublisher } from '../interfaces/ILogPublisher';
import { HttpClient } from '@angular/common/http';
import { IPublisherConfiguration } from '../interfaces/IPublisherConfiguration';
import { environment } from '@env/environment';

@Injectable()
export class HttpLoggerService implements ILogPublisher {

    constructor(private httpClient: HttpClient) { }

    public async publishLog(logMessage: ILogMessage): Promise<void> {
        await this.httpClient.post('api/log', logMessage).toPromise().then((result) => { }).catch((err) => { });
    }


    public getConfig(): IPublisherConfiguration {
        return environment.logConfig.http;
    }

}
