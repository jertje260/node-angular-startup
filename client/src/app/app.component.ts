import { Component } from '@angular/core';
import { LoggerService } from './core/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private logger: LoggerService) {
    logger.info('hi');
  }

  user = 'henk';

  title = 'frontend';



}
