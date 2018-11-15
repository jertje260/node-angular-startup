import { Component } from '@angular/core';
import { LoggerService } from './core/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private logger: LoggerService) {
    console.log('started');
    logger.info('info');
    logger.warn('warn');
    logger.error('error');
    logger.debug('debug');
  }

  user = 'henk';

  title = 'frontend';

  log() {
    this.logger.info('hello');
  }

}
