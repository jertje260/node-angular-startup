import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ConfigService } from './config/config.service';
import { LoggerModule } from './logger/logger.module';

export function initializeCore(configService: ConfigService) {
  return () => configService.load();
}


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    LoggerModule
  ],
  providers: [
    ConfigService,
       { provide: APP_INITIALIZER,
         useFactory: initializeCore,
         deps: [ConfigService], multi: true }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
