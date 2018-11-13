import { ILogPublisher } from '../interfaces/ILogPublisher';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class AbstractLogPublisherService {
    abstract publishers: ILogPublisher[];
}
