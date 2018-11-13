import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogMessage } from '../interfaces/ILogMessage';
import { IApiLoggerService } from '../interfaces/IApiLoggerService';

@Injectable()
export class ApiLoggerService implements IApiLoggerService {

  constructor(private httpClient: HttpClient) { }

  public async sendLogMessage(logMessage: ILogMessage): Promise<void> {
    // no use in waiting for the response to log something.
    await this.httpClient.post('api/log', logMessage);
  }

}
