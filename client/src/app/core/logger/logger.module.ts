import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './abstract/logger.service';
import { environment } from '@env/environment';
import { HttpLoggerService } from './services/httpLogger.service';
import { ConsoleLoggerService } from './services/consoleLogger.service';
import { ApiLoggerService } from './services/api-logger.service';

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
