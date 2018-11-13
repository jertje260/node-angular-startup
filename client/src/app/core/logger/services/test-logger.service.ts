import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogMessage } from '../interfaces/ILogMessage';

@Injectable()
export class ApiLoggerService {

    constructor() { }

    public async sendLogMessage(logMessage: ILogMessage): Promise<void> {
        // does nothing with the logmessage, usage for testing
        return Promise.resolve();
    }

}
