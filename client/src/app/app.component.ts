import { Component } from '@angular/core';
import { LoggerService } from './core/logger/abstract/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private logger: LoggerService) {  }
  title = 'frontend';

  logSomething() {
    const obj = { foo: 'bar' };
    this.logger.info('test %s', 'a', obj.foo);
  }
}
