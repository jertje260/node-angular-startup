import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { IAppConfig } from './IAppConfig';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  static settings: IAppConfig;
  constructor(private http: HttpClient) { }

  load() {
    const jsonFile = `assets/config/config.${environment.name}.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get<IAppConfig>(jsonFile).toPromise().then((config: IAppConfig) => {
        ConfigService.settings = config;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
