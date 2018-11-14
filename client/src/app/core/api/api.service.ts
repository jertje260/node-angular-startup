import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Endpoints } from './interfaces/Endpoints';

export const END_POINTS = new InjectionToken('END_POINTS');

@Injectable()
export class ApiService {
  private baseUrl = '';
  endPoints: Endpoints;

  constructor(@Inject(END_POINTS) private _endPoints) {
    this.endPoints = _endPoints.reduce((acc, current) => {
      return {
        acc,
        current
      };
    }, {});
   }

  resolve(url: string, params?) {
    if (!params) {
      return `${this.baseUrl}${url}`;
    }

    const resolved = Object.keys(params).reduce((acc, param) => {
      return acc.replace(`:${param}`, params[param]);
    }, url);

    return `${this.baseUrl}${resolved}`;
  }
}
