import { Component } from '@angular/core';
import { LoggerService } from './core/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private logger: LoggerService) {
    logger.info('test', 'a', { foo: 'bar' });
  }
  title = 'frontend';
}
