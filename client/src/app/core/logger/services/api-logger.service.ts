import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogMessage } from '../interfaces/ILogMessage';

@Injectable()
export class ApiLoggerService {

  constructor(private httpClient: HttpClient) { }

  public sendLogMessage(logMessage: ILogMessage): void {
    // no use in waiting for the response to log something.
    this.httpClient.post('api/log', logMessage).subscribe();
  }

}
