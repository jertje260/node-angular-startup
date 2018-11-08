import { NgModule, Optional, SkipSelf, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './loggerService';
import { environment } from 'src/environments/environment';
import { HttpLoggerService } from './httpLoggerService';
import { ConsoleLoggerService } from './consoleLoggerService';

interface LoggingConfig {
  useHttpLogging: boolean;
}

const loggingConfigService = new InjectionToken<LoggingConfig>('Logging Token');

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: LoggerService,
      useFactory: () => {
        if (environment.useHttpLogger) {
          return HttpLoggerService;
        } else {
          return ConsoleLoggerService;
        }
      }
    }
  ],
  declarations: []
})
export class LoggerModule {

  constructor(@Optional() @SkipSelf() parentModule: LoggerModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
