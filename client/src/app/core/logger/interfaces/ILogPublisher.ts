import { ILogMessage, LogMessageLevel } from './ILogMessage';
import { IPublisherConfiguration } from './IPublisherConfiguration';

export interface ILogPublisher {
    publishLog(logMessage: ILogMessage): Promise<void>;
    getConfig(): IPublisherConfiguration;
}
