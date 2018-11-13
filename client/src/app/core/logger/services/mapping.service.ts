import { Injectable } from '@angular/core';
import { ILocation } from '../interfaces/ILocation';


@Injectable({
  providedIn: 'root'
})
export class MappingService {
  constructor() {

  }

  public getLocation(depth: number = 2): ILocation {
    const err = new Error();

    const splitted = err.stack.split('\n');

    const regex = /\w*at (.*) \((.*)\?:(\d+):(\d+)\)/;

    const match = regex.exec(splitted[depth]);

    if (match === null) {
      return {
        colon: 0,
        file: 'unknown',
        line: 0,
        method: 'unknown'
      };
    }

    return {
      colon: parseInt(match[4], 0),
      file: match[2],
      line: parseInt(match[3], 0),
      method: match[1]
    };
  }
}
