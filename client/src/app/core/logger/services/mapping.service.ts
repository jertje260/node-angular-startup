import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MappingService {
  constructor() {

  }

  public getLocation() {
    const err = new Error();

    const splitted = err.stack.split('\n');
    console.log(splitted);
  }
}
