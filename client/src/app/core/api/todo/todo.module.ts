import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { END_POINTS } from '../api.service';
import { api } from './config/api';
import { TodoService } from './services/todo.service';

const TODO_API = { provide: END_POINTS, multi: true, useValue: api };

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TodoService, TODO_API],
  declarations: []
})
export class TodoModule { }
