import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { END_POINTS } from '../api.service';
import { api } from './config/api';
import { AuthService } from './services/auth.service';

const AUTH_API = { provide: END_POINTS, multi: true, useValue: api };

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthService, AUTH_API],
  declarations: []
})
export class AuthModule { }
