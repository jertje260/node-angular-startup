import { Component } from '@angular/core';
import { LoggerService } from './core/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private logger: LoggerService) {
    logger.info('info');
    logger.warn('warn');
    logger.error('error');
    logger.debug('debug');
  }

  user = 'henk';

  title = 'frontend';

  logInfo() {
    this.logger.info('info');
  }

  logDebug() {
    this.logger.debug('debug');
  }

  logWarning() {
    this.logger.warn('warning');
  }

  logError() {
    this.logger.error('error');
  }

}
