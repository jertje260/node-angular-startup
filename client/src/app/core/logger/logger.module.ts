import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { environment } from '@env/environment';
import { HttpLoggerService } from './httpLogger.service';
import { ConsoleLoggerService } from './consoleLogger.service';
import { ApiLoggerService } from './api-logger.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ApiLoggerService,
    {
      provide: LoggerService,
      useFactory: (apiLoggerService: ApiLoggerService) => {
        if (environment.useHttpLogger) {
          return new HttpLoggerService(apiLoggerService);
        } else {
          return new ConsoleLoggerService();
        }
      },
      deps: [ApiLoggerService]
    }
  ],
  exports: [
  ],
  declarations: [
  ]
})
export class LoggerModule {

  constructor(@Optional() @SkipSelf() parentModule: LoggerModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import LoggerModule in the CoreModule only.`);
    }
  }
}
