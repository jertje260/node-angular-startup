import { Injectable } from '@angular/core';
import { ILogPublisher } from '../interfaces/ILogPublisher';
import { AbstractLogPublisherService } from '../abstract/ILogPublisherService';
import { ConsoleLoggerService } from './console-logger.service';
import { HttpLoggerService } from './http-logger.service';

@Injectable({
  providedIn: 'root'
})
export class LogPublisherService implements AbstractLogPublisherService {

  publishers: ILogPublisher[];

  constructor(private console: ConsoleLoggerService, private http: HttpLoggerService) {
    this.publishers.push(console);
    this.publishers.push(http);
  }
}
