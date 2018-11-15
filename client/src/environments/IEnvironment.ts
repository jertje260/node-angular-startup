import { ILoggersConfiguration } from '@app/core/logger';

export interface IEnvironment {
    production: boolean;
    logConfig: ILoggersConfiguration;
}
