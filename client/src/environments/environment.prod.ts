import { IEnvironment } from './IEnvironment';
import { LogLevel } from '@app/core/logger';

export const environment: IEnvironment = {
  production: true,
  logConfig: {
    console: {
      level: LogLevel.Error
    },
    http: {
      level: LogLevel.Warn
    }
  }
};
