import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { HttpLoggerService } from './services/http-logger.service';
import { ConsoleLoggerService } from './services/console-logger.service';
import { LogPublisherService } from './services/log-publisher.service';
import { AbstractLogPublisherService } from './abstract/ILogPublisherService';

@NgModule({
  providers: [
    LoggerService,
    ConsoleLoggerService,
    HttpLoggerService,
    {
      provide: AbstractLogPublisherService,
      useClass: LogPublisherService
    },
  ],
})
export class LoggerModule {

  constructor(@Optional() @SkipSelf() parentModule: LoggerModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import LoggerModule in the CoreModule only.`);
    }
  }

}
