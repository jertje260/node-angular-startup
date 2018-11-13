import { InjectionToken } from '@angular/core';
import { ILoggersConfiguration } from '../interfaces/ILoggersConfiguration';

export const LogConfigService = new InjectionToken<ILoggersConfiguration>('LoggersConfig');
