import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class TodoService {

  constructor(private api: ApiService) { }

  deleteTodo(id: number) {
    const url = this.api.resolve(this.api.endPoints.deleteTodo, { id });
    // do call to endpoint
  }

  getTodo(id: number) {
    const url = this.api.resolve(this.api.endPoints.getTodo, { id });
    // do call to endpoint
  }
}
