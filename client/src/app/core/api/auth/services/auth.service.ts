import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService) { }

  login() {
    const url = this.api.resolve(this.api.endPoints.login);
    // Execute login
  }
}
