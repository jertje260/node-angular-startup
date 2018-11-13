import { IPublisherConfiguration } from './IPublisherConfiguration';

export interface ILoggersConfiguration {
    console: IPublisherConfiguration;
    http: IPublisherConfiguration;
}
